/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                    *
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

const getCopyrightYear = (filePath, defaultYear) => {
  if (!fs.existsSync(filePath)) {
    return defaultYear;
  }
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to find "Copyright <YEAR>" or "Copyright <YEAR>-..."
    // We capture the first 4 digits found after "Copyright "
    const match = content.match(/Copyright\s+(\d{4})/);
    if (match && match[1]) {
      return match[1];
    }
  } catch (e) {
    // ignore error, return default
  }
  return defaultYear;
};

// Get creation year from git history
const getCreationYearFromGit = (filePath) => {
  try {
    // --diff-filter=A : Only look for the commit where it was Added
    // --format=%ad : Format as date
    // --date=format:%Y : Output only the Year
    const output = execSync(
      `git log --diff-filter=A --format=%ad --date=format:%Y -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    // If git returns multiple lines (renames), take the last one (oldest)
    const years = output.split('\n').filter(Boolean);
    return years.length > 0 ? years[years.length - 1] : new Date().getFullYear().toString();
  } catch (e) {
    return new Date().getFullYear().toString();
  }
};

const getLastModifiedYearFromGit = (filePath) => {
  try {
    // Check if file has uncommitted changes
    const statusOutput = execSync(
      `git status --porcelain -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    
    // If file is modified in working directory, use current year
    if (statusOutput && statusOutput.startsWith('M')) {
      return new Date().getFullYear().toString();
    }
    
    // Otherwise get last commit year from git history
    const output = execSync(
      `git log -1 --format=%ad --date=format:%Y -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    return output || new Date().getFullYear().toString();
  } catch (e) {
    return new Date().getFullYear().toString();
  }
};

// Normalize content for comparison (ignores comments/whitespace)
const normalizeContent = (str) => {
  return str
    .replace(/\/\*\s*=+\s*\*[\s\S]*?\*\s*=+\s*\*\//g, '') // Remove copyright header
    .replace(/\s+/g, '') // Remove whitespace
    .replace(/,([}\])])/g, '$1'); // Remove trailing commas
};

const cleanOrphanedFiles = (directory, generatedFiles) => {
  if (!fs.existsSync(directory)) return;

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.resolve(directory, entry.name);
    
    if (entry.isDirectory()) {
      cleanOrphanedFiles(fullPath, generatedFiles);
      if (fs.readdirSync(fullPath).length === 0) {
        fs.rmdirSync(fullPath);
      }
    } else {
      if (!generatedFiles.has(fullPath)) {
        fs.rmSync(fullPath);
      }
    }
  }
};

const transformSvgAst = (ast) => {
  const svgElement = ast.children.find((n) => n.tagName === 'svg');
  if (!svgElement) throw new Error('No <svg> tag found in AST');
  
  const camelCaseAttrs = (props) => {
    return Object.keys(props).reduce((acc, key) => {
      let value = props[key];
      if (typeof value === 'string') {
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
  generatedPaths
) => {
  const { reactExcludes, wcExcludes, counters } = configs;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  const svgFiles = entries.filter(e => e.isFile() && e.name.endsWith('.svg'));

  if (svgFiles.length > 1) {
    console.error(`[BUILDER] ERROR: Found multiple .svg files in directory: ${currentDir}`);
    counters.failedIcons.push(`${path.basename(currentDir)} (Build Error)`);
    counters.reactFailed += 1;
    counters.wcFailed += 1;
    return;

  } else if (svgFiles.length === 1) {
    const svgFile = svgFiles[0];
    const fullSvgPath = path.join(currentDir, svgFile.name);
    const iconName = path.basename(currentDir);

    // Get the relative path for the output (e.g., "elements/basic/button")
    const relativeDir = path.relative(customSourcePath, currentDir);
    const currentYear = new Date().getFullYear().toString();

    // get true creation year from git
    const creationYear = getCreationYearFromGit(fullSvgPath);

    // Parse the SVG file
    let ast, attrs, content;
    try {
      const svgText = fs.readFileSync(fullSvgPath, 'utf8');
      ast = parse(svgText);
      ({ attrs, content } = transformSvgAst(ast));
    } catch (err) {
      console.error(`[BUILDER] Failed to parse SVG ${fullSvgPath}: ${err.message}`);
      counters.reactFailed += 1;
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
        const reactIconDir = path.join(customReactDestPath, relativeDir);
        const reactDestFile = path.join(reactIconDir, 'index.tsx');
        const reactUtilsImportPath = path.relative(reactIconDir, reactUtilsPath).replace(/\\/g, '/');

        const lastModifiedYear = getLastModifiedYearFromGit(fullSvgPath);
        const finalCopyright = (creationYear === lastModifiedYear) 
          ? creationYear 
          : `${creationYear}, ${lastModifiedYear}`;

        const reactContent = createCustomReactIcon(iconName, sizeInt, content, attrs, reactUtilsImportPath, finalCopyright);
        ensureDirSync(reactIconDir);
        fs.writeFileSync(reactDestFile, reactContent);
        generatedPaths.react.add(path.resolve(reactDestFile)); 
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
        const wcDestFile = path.join(wcIconDir, 'index.ts');
        const wcUtilsImportPath = path.relative(wcIconDir, wcUtilsPath).replace(/\\/g, '/');

        const lastModifiedYear = getLastModifiedYearFromGit(fullSvgPath);
        const finalCopyright = (creationYear === lastModifiedYear) 
          ? creationYear 
          : `${creationYear}, ${lastModifiedYear}`;

        const wcContent = createCustomWebComponentIcon(iconName, sizeInt, content, attrs, wcUtilsImportPath, finalCopyright);
        ensureDirSync(wcIconDir);
        fs.writeFileSync(wcDestFile, wcContent);
        generatedPaths.wc.add(path.resolve(wcDestFile));
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
        processCustomIconDirectory(path.join(currentDir, entry.name), configs, generatedPaths);
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
  
  ensureDirSync(carbonReactDestPath);
  ensureDirSync(carbonWcDestPath);
  ensureDirSync(customReactDestPath);
  ensureDirSync(customWcDestPath);

  const reactRenames = new Map(Object.entries({ ...config.common.renames, ...config.react.renames }));
  const reactExcludes = new Set([ ...config.common.excludes, ...(config.react.excludes || []) ]);
  const wcRenames = new Map(Object.entries({ ...config.common.renames, ...config.wc.renames }));
  const wcExcludes = new Set([ ...config.common.excludes, ...(config.wc.excludes || []) ]);

  const generatedReactCarbonPaths = new Set();
  const generatedWCCarbonPaths = new Set();
  const generatedCustomReactPaths = new Set();
  const generatedCustomWCPaths = new Set();

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
        const reactFilePath = path.join(carbonReactDestPath, iconName);
        const indexFile = path.join(reactFilePath, 'index.tsx');

        // Try to get year from existing file, otherwise default to 2024
        // New icons will default to current year if not found
        const existingYear = getCopyrightYear(indexFile, null);
      
        const year = existingYear || new Date().getFullYear().toString();

        const reactContent = createCarbonReactIcon(iconName, 32, '', isRenamed, originalName, year);
        ensureDirSync(reactFilePath);
        fs.writeFileSync(indexFile, reactContent);
        
        generatedReactCarbonPaths.add(path.resolve(indexFile));
        counters.reactSuccess += 1;
      } catch (err) {
        counters.reactFailed += 1;
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
        const wcFilePath = path.join(carbonWcDestPath, iconName);
        const indexFile = path.join(wcFilePath, 'index.ts');
        
        const existingYear = getCopyrightYear(indexFile, null);
        const year = existingYear || new Date().getFullYear().toString();

        const wcContent = createCarbonWebComponentIcon(iconName, 32, originalName, year);
        ensureDirSync(wcFilePath);
        fs.writeFileSync(indexFile, wcContent);

        generatedWCCarbonPaths.add(path.resolve(indexFile));
        counters.wcSuccess += 1;
      } catch (err) {
        counters.wcFailed += 1;
      }
    }
  }

  console.log('Cleaning up orphaned Carbon icons...');
  cleanOrphanedFiles(carbonReactDestPath, generatedReactCarbonPaths);
  cleanOrphanedFiles(carbonWcDestPath, generatedWCCarbonPaths);

  console.log('Generating Custom icons...');
  processCustomIconDirectory(customSourcePath, {
    reactExcludes,
    wcExcludes,
    counters,
  }, {
    react: generatedCustomReactPaths,
    wc: generatedCustomWCPaths
  });

  console.log('Cleaning up orphaned Custom icons...');
  cleanOrphanedFiles(customReactDestPath, generatedCustomReactPaths);
  cleanOrphanedFiles(customWcDestPath, generatedCustomWCPaths);

  console.log('\n-- Build Summary ---');
  console.info(`✅ React Icons: ${counters.reactSuccess} created, ${counters.reactFailed} failed.`);
  console.info(`✅ Web Components: ${counters.wcSuccess} created, ${counters.wcFailed} failed.`);

  if (counters.failedIcons.length > 0) {
    console.error('\n❌ Failed icons:');
    counters.failedIcons.forEach(iconName => console.error(` - ${iconName}`));
  }

  console.log('\nDONE- Icon generation complete');
  
  // Format React custom icons
  try {
    const reactCustomDir = path.relative(process.cwd(), customReactDestPath);
    console.log('Formatting React customs icons...');
    execSync(`npx prettier --write --single-quote --trailing-comma all "${reactCustomDir}/**/*.tsx"`);
    console.log('✅ Formatting complete.');
  } catch (err) {
    console.error('❌ Error during formatting:', err.message);
  }
}

buildIcons();