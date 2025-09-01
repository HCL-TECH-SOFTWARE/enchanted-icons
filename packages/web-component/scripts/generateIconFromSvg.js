/* eslint-disable no-undef */
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
import { readFileSync, writeFileSync, existsSync, mkdirSync, lstatSync, readdirSync } from 'fs';
import path, { join, basename, extname, relative } from 'path';
import { JSDOM } from 'jsdom';

/**
 * Converts an SVG string/file into a structured object format for a Lit-based icon library.
 * This is a simplified parser and may not handle all complex SVG attributes or nested structures.
 *
 * @param {string} svgString - The SVG code as a string (e.g., '<svg ...><path ... /></svg>').
 * @param {string} iconName - The desired name for the icon (e.g., 'icon-app-switcher').
 * @param {string} utilsImportPath - The relative path to the shared utils directory.
 * @returns {string} The complete JavaScript code for the Lit icon component.
 */
const convertSvgToLitIcon = (svgString, iconName, utilsImportPath) => {
  const dom = new JSDOM(svgString, { contentType: 'image/svg+xml' });
  const svgElement = dom.window.document.querySelector('svg');
  
  if (!svgElement) {
    console.error('Invalid SVG string provided.');
    return '';
  }

  const attrs = {};
  for (const attr of svgElement.attributes) {
    if (attr.name === 'width' || attr.name === 'height') {
      const numberValue = Number(attr.value);
      if (!isNaN(numberValue)) {
        attrs[attr.name] = numberValue;
      } else {
        attrs[attr.name] = attr.value;
      }
    } else {
      attrs[attr.name] = attr.value;
    }
  }

  const content = [];
  svgElement.childNodes.forEach(child => {
    if (child.nodeType === 1) {
      const elem = child.tagName;
      const childAttrs = {};
      for (const attr of child.attributes) {
        childAttrs[attr.name] = attr.value;
      }
      content.push({ elem, attrs: childAttrs });
    }
  });

  return `/* ======================================================================== *
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

import { html } from 'lit';
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '${utilsImportPath}';
import { BaseIcon } from '${utilsImportPath}/base-icon';

const attrs: IIconAttrs = ${JSON.stringify(attrs, null, 2)};

const content: IIconContent[] = ${JSON.stringify(content, null, 2)};

export const ICON_NAME = '${iconName}';
export class WebComponentIcon extends BaseIcon {
  render() {
    return html\`\${createSvgIcon(content, attrs)}\`;
  }
}

if (canDefine && !customElements.get(ICON_NAME)) {
  customElements.define(ICON_NAME, WebComponentIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}`;
}

/**
 * Reads an SVG file, converts it, and writes the output to a new file.
 *
 * @param {string} inputFilePath - Path to the input SVG file.
 * @param {string} outputFilePath - Path to the output file.
 */
const processFile = (inputFilePath, outputFilePath, utilsImportPath) => {
  const file = basename(inputFilePath);
  const iconName = `icon-${basename(file, '.svg').toLowerCase().replace(/-+/g, '-')}`;

  try {
    const svgContent = readFileSync(inputFilePath, 'utf-8');
    const generatedCode = convertSvgToLitIcon(svgContent, iconName, utilsImportPath);
    writeFileSync(outputFilePath, generatedCode);
    console.log(`Converted ${file} -> ${basename(outputFilePath)}`);
  } catch (error) {
    console.error(`Failed to convert ${file}:`, error.message);
  }
}


const processDirectoryRecursive = (currentPath, sourceRoot, outputRoot) => {
  const items = readdirSync(currentPath);

  items.forEach(item => {
    const fullPath = join(currentPath, item);
    const stats = lstatSync(fullPath);

    if (stats.isDirectory()) {
      processDirectoryRecursive(fullPath, sourceRoot, outputRoot);
    } else if (stats.isFile() && extname(item) === '.svg') {
      const relativePath = relative(sourceRoot, fullPath);
      const outputDir = join(outputRoot, path.dirname(relativePath));
      const outputFileName = `index.ts`;
      const outputFilePath = join(outputDir, outputFileName);

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      const relativeImportPath = relative(outputDir, join(process.cwd(), 'src', 'utils')).replace(/\\/g, '/');

      processFile(fullPath, outputFilePath, relativeImportPath);
    }
  })
}

// CLI script arguments and file processing

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: node script.js <inputPath> [<outputDir>]');
  console.error('  <inputPath> can be a single .svg file or a directory containing .svg files.');
  console.error('  <outputDir> is optional. If not provided, a default location will be used.');
  process.exit(1);
}

const inputPath = args[0];
let outputDir = args[1];

try {
  const stats = lstatSync(inputPath);

  if (stats.isDirectory()) {
    outputDir = outputDir || join('src');
  
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}`);
    }

    console.log(`Found a directory at ${inputPath}. Starting recursive conversion... `);
    processDirectoryRecursive(inputPath, inputPath, outputDir);
    console.log('\nConversion complete.');
  } else if (stats.isFile() && extname(inputPath) === '.svg') {
    const iconNameWithoutExt = basename(inputPath, '.svg').toLowerCase().replace(/_|\s/g, '-');
    outputDir = outputDir || join('src', iconNameWithoutExt);

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}`);
    }
    
    const outputFilePath = join(outputDir, 'index.ts');
    
    const relativeImportPath = relative(outputDir, join(process.cwd(), 'src', 'utils')).replace(/\\/g, '/');

    console.log(`Converting single file: ${inputPath}`);
    processFile(inputPath, outputFilePath, relativeImportPath);
    console.log('\nConversion complete.');
  } else {
    console.error(`Invalid input: ${inputPath}. Please provide a valid .svg file or a directory.`);
    process.exit(1);
  }
} catch (error) {
  console.error('An error occurred:', error.message);
  process.exit(1);
}