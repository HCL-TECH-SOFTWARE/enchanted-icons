/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import { parse } from 'svg-parser';
import { execSync } from 'child_process';
import config from './config.json' with { type: 'json' };
import { 
  createCarbonReactIcon, 
  createCarbonWebComponentIcon,
  createCustomReactIcon,
  createCustomWebComponentIcon,
} from './templates.js';

const carbonSourcePath = path.resolve(process.cwd(), 'node_modules/@carbon/icons/es');
const carbonReactDestPath = path.resolve(process.cwd(), '../react/src/carbon/es');
const carbonWcDestPath = path.resolve(process.cwd(), '../web-component/src/carbon/es');

const customSourcePath = path.resolve(process.cwd(), 'svg');
const customReactDestPath = path.resolve(process.cwd(), '../react/src/apps/es');
const customWcDestPath = path.resolve(process.cwd(), '../web-component/src/apps/es');
const reactUtilsPath = path.resolve(carbonReactDestPath, '../../utils');
const wcUtilsPath = path.resolve(carbonWcDestPath, '../../utils');

const ensureDirSync = (dirpath) => {
  try {
    fs.mkdirSync(dirpath, {
      recursive: true,
    });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

const removeDirSync = (dirpath) => {
  try {
    fs.rmSync(dirpath, {
      recursive: true,
      force: true,
    });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
};

const transformSvgAst = (ast) => {
  const svgElement = ast.children.find((n) => n.tagName === 'svg');
  if (!svgElement) throw new Error('No <svg> tag found in AST');
  
  const camelCaseAttrs = (props) => {
    return Object.keys(props).reduce((acc, key) => {
      let value = props[key];
      if (typeof value === 'string') {
        // Replace all newlines, tabs, and multiple spaces with single space
        value = value.replace(/\s+/g, ' ').trim();
      }
      acc[_.camelCase(key)] = value;
      return acc;
    }, {});
  };

  const attrs = camelCaseAttrs(svgElement.properties);

  const content = svgElement.children
    .filter((n) => n.type === 'element')
    .map((n) => ({
      elem: n.tagName,
      attrs: camelCaseAttrs(n.properties),
    }));

  return { attrs, content };
}

// Recursively scans the custom icon source directory
const processCustomIconDirectory = (
  currentDir,
  configs,
) => {
  const { reactExcludes, wcExcludes, counters } = configs;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  const svgFiles = entries.filter(e => e.isFile() && e.name.endsWith('.svg'));

  if (svgFiles.length > 1) {
    console.error(`[BUILDER] ERROR: Found multiple .svg files in directory: ${currentDir}`);
    console.error('       Only one .svg file is allowed per icon directory.');

    counters.failedIcons.push(`${path.basename(currentDir)} (Build Error)`);
    counters.reactFailed += 1;
    counters.wcFailed += 1;
    return;

  } else if (svgFiles.length === 1) {
    const svgFile = svgFiles[0];
    const svgFileName = svgFile.name;
    const fullSvgPath = path.join(currentDir, svgFileName);

    // Get the iconName from the directory name (e.g., "button")
    const iconName = path.basename(currentDir);

    // Get the relative path for the output (e.g., "elements/basic/button")
    const relativeDir = path.relative(customSourcePath, currentDir);

    // Parse the SVG file
    let ast, attrs, content;
    try {
      const svgText = fs.readFileSync(fullSvgPath, 'utf8');
      ast = parse(svgText);
      ({ attrs, content } = transformSvgAst(ast));
    } catch (err) {
      console.error(`[BUILDER] Failed to parse SVG ${fullSvgPath}: ${err.message}`);
      counters.reactFailed += 1;
      counters.wcFailed += 1;
      counters.failedIcons.push(`${iconName} (SVG Parse Error)`);
      return;
    }

    const sizeInt = attrs.width;
    if (!sizeInt || typeof sizeInt !== 'number') {
      // This will fail if the <svg> tag has no width="32" attribute
      console.warn(`[BUILDER] Skipping dir: Could not find valid 'width' attribute in SVG: ${fullSvgPath}`);
      return;
    }
    
    if (!reactExcludes.has(iconName)) {
      try {
        // Output path is just the relativeDir
        // e.g., .../custom/es/elements/basic/button/
        const reactIconDir = path.join(customReactDestPath, relativeDir);
        const reactUtilsImportPath = path.relative(reactIconDir, reactUtilsPath).replace(/\\/g, '/');

        const reactContent = createCustomReactIcon(iconName, sizeInt, content, attrs, reactUtilsImportPath);
        ensureDirSync(reactIconDir);
        fs.writeFileSync(path.join(reactIconDir, 'index.tsx'), reactContent);
        counters.reactSuccess += 1;
      } catch (err) {
        counters.reactFailed += 1;
        counters.failedIcons.push(`${iconName} (Custom React)`);
        console.error(`[BUILDER] Failed to create custom React icon ${iconName}: ${err.message}`);
      }
    }

    if (!wcExcludes.has(iconName)) {
      try {
        const wcIconDir = path.join(customWcDestPath, relativeDir);
        const wcUtilsImportPath = path.relative(wcIconDir, wcUtilsPath).replace(/\\/g, '/');

        const wcContent = createCustomWebComponentIcon(iconName, sizeInt, content, attrs, wcUtilsImportPath);
        ensureDirSync(wcIconDir);
        fs.writeFileSync(path.join(wcIconDir, 'index.ts'), wcContent);
        counters.wcSuccess += 1;
      } catch (err) {
        counters.wcFailed += 1;
        counters.failedIcons.push(`${iconName} (Custom WC)`);
        console.error(`[BUILDER] Failed to create custom WC icon ${iconName}: ${err.message}`);
      }
    }
  } else {
    // This is a container directory
    // No .svg file here (e.g., "elements").
    // Scan its children directories.
    for (const entry of entries) {
      if (entry.isDirectory()) {
        processCustomIconDirectory(path.join(currentDir, entry.name), configs);
      }
    }
  }
}

const buildIcons = () => {
  console.log('START - Generating icons...');

  const counters = {
    reactSuccess: 0,
    reactFailed: 0,
    wcSuccess: 0,
    wcFailed: 0,
    failedIcons: [],
  };
  
  // Clear old icons
  removeDirSync(carbonReactDestPath);
  removeDirSync(carbonWcDestPath);
  removeDirSync(customReactDestPath);
  removeDirSync(customWcDestPath);

  ensureDirSync(carbonReactDestPath);
  ensureDirSync(carbonWcDestPath);
  ensureDirSync(customReactDestPath);
  ensureDirSync(customWcDestPath);

  const reactRenames = new Map(Object.entries({
    ...config.common.renames,
    ...config.react.renames
  }));
  const reactExcludes = new Set([
    ...config.common.excludes,
    ...(config.react.excludes || []),
  ]);
  const wcRenames = new Map(Object.entries({
    ...config.common.renames,
    ...config.wc.renames
  }));
  const wcExcludes = new Set([
    ...config.common.excludes,
    ...(config.wc.excludes || []),
  ]);

  // Generate Carbon Icons
  console.log('Generating Carbon icons...');
  const files = fs.readdirSync(carbonSourcePath);

  for (const originalName of files) {
    // Create React components
    if (!reactExcludes.has(originalName) && fs.existsSync(path.join(carbonSourcePath, originalName, '32.js'))) {
      let isRenamed = false;
      let iconName = originalName;
      if (reactRenames.has(originalName)) {
        iconName = reactRenames.get(originalName);
        isRenamed = true;
      }

      try {
        const reactContent = createCarbonReactIcon(iconName, 32, '', isRenamed, originalName);
        const reactFilePath = path.join(carbonReactDestPath, iconName);
        ensureDirSync(reactFilePath);
        fs.writeFileSync(path.join(reactFilePath, 'index.tsx'), reactContent);
        counters.reactSuccess += 1;
      } catch (err) {
        counters.reactFailed += 1;
        counters.failedIcons.push(`${originalName} (React)`);
        console.error(`[BUILDER] Failed to create React icon ${originalName}: ${err.message}`);
      }
    }

    // Create web components
    if (!wcExcludes.has(originalName) && fs.existsSync(path.join(carbonSourcePath, originalName, '32.js'))) {
      let isRenamed = false;
      let iconName = originalName;
      if (wcRenames.has(originalName)) {
        iconName = wcRenames.get(originalName);
        isRenamed = true;
      }
      
      try {
        const wcContent = createCarbonWebComponentIcon(iconName, 32, originalName);
        const wcFilePath = path.join(carbonWcDestPath, iconName);
        ensureDirSync(wcFilePath);
        fs.writeFileSync(path.join(wcFilePath, 'index.ts'), wcContent);
        counters.wcSuccess += 1;
      } catch (err) {
        counters.wcFailed += 1;
        counters.failedIcons.push(`${originalName} (WC)`);
        console.error(`[BUILDER] Failed to create WC icon ${originalName}: ${err.message}`);
      }
    }
  }

  // Generate Custom icons
  processCustomIconDirectory(customSourcePath, {
    reactExcludes,
    wcExcludes,
    counters,
  });

  console.log('\n-- Build Summary ---');
  console.info(`✅ React Icons: ${counters.reactSuccess} created, ${counters.reactFailed} failed.`);
  console.info(`✅ Web Components: ${counters.wcSuccess} created, ${counters.wcFailed} failed.`);

  if (counters.failedIcons.length > 0) {
    console.error('\n❌ Failed icons:');
    counters.failedIcons.forEach(iconName => console.error(` - ${iconName}`));
  }

  console.log('\nDONE- Icon generation complete');
  
  // Format React custom icons to use single quotes and add trailing comma to the code
  try {
    // Get the paths to the generated code
    const reactCustomDir = path.relative(process.cwd(), customReactDestPath);
    const wcCustomDir = path.relative(process.cwd(), customWcDestPath);

    console.log('Formatting React customs icons...');
    execSync(`npx prettier --write --single-quote --trailing-comma all "${reactCustomDir}/**/*.tsx"`);
    console.log('✅ Formatting complete.');
  } catch (err) {
    console.error('❌ Error during formatting:', err.message);
  }
}

buildIcons();