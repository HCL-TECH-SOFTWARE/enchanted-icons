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
import { join, basename, extname } from 'path';
import { JSDOM } from 'jsdom';

/**
 * Converts an SVG string into a structured object format for a Lit-based icon library.
 * This is a simplified parser and may not handle all complex SVG attributes or nested structures.
 *
 * @param {string} svgString - The SVG code as a string (e.g., '<svg ...><path ... /></svg>').
 * @param {string} iconName - The desired name for the icon (e.g., 'icon-app-switcher').
 * @returns {string} The complete JavaScript code for the Lit icon component.
 */
const convertSvgToLitIcon = (svgString, iconName) => {
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

  return `import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';

const attrs: IIconAttrs = ${JSON.stringify(attrs, null, 2)};

const content: IIconContent[] = ${JSON.stringify(content, null, 2)};

export const ICON_NAME = '${iconName}';
@customElement(ICON_NAME)
export class WebComponentIcon extends BaseIcon {
  render() {
    return html\`\${createSvgIcon(content, attrs)}\`;
  }
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
const processFile = (inputFilePath, outputFilePath) => {
  const file = basename(inputFilePath);
  const iconName = `icon-${basename(file, '.svg').toLowerCase().replace(/-+/g, '-')}`;

  try {
    const svgContent = readFileSync(inputFilePath, 'utf-8');
    const generatedCode = convertSvgToLitIcon(svgContent, iconName);
    writeFileSync(outputFilePath, generatedCode);
    console.log(`Converted ${file} -> ${basename(outputFilePath)}`);
  } catch (error) {
    console.error(`Failed to convert ${file}:`, error.message);
  }
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
    // If outputDir is not provided, use a default for the directory
    if (!outputDir) {
      outputDir = join('src', 'apps', 'es');
    }
  
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}`);
    }

    const files = readdirSync(inputPath);
    if (files.length === 0 ) {
      console.warn(`No files found in input directory: ${inputPath}`);
      process.exit(0);
    }
    console.log(`Found ${files.length} files in ${inputPath}. Starting conversion... `);

    files.forEach(file => {
      if (extname(file) === '.svg') {
        const iconNameWithoutExt = basename(file, '.svg').toLowerCase();
        const individualIconOutputDir = join(outputDir, iconNameWithoutExt);
        if (!existsSync(individualIconOutputDir)) {
          mkdirSync(individualIconOutputDir, { recursive: true });
        }

        const inputFilePath = join(inputPath, file);
        const outputFilePath = join(individualIconOutputDir, 'index.ts');
        processFile(inputFilePath, outputFilePath);
      }
    });
  } else if (stats.isFile() && extname(inputPath) === '.svg') {
    const iconNameWithoutExt = basename(inputPath, '.svg').toLowerCase();
    outputDir = outputDir || join('src', 'apps', 'es', iconNameWithoutExt);

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}`);
    }
    
    const outputFilePath = join(outputDir, 'index.ts');
    
    console.log(`Converting single file: ${inputPath}`);
    processFile(inputPath, outputFilePath);
  } else {
    console.error(`Invalid input: ${inputPath}. Please provide a valid .svg file or a directory.`);
    process.exit(1);
  }

  console.log('\nConversion complete.');
} catch (error) {
  console.error('An error occurred:', error.message);
  process.exit(1);
}