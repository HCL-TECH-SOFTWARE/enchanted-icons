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
import fs from 'fs';
import path from 'path';

let filesCreated = 0;
/**
 * Generate svg file based on svg details
 * 
 * @param attrs An object of attributes for the root <svg> tag.
 * @param content A list of objects, each representing an SVG element.
 * @param fileName Output SVG file name
 */
const convertToSvg = (attrs, content, fileName) => {
  let svgString = '';
  
  const attrString = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
  
  svgString += `<svg ${attrString}>`;

  // Attach the content elements
  for (const item of content) {
    const elem = item.elem;
    const elemAttrs = item.attrs;
    const elemAttrString = Object.entries(elemAttrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    svgString += `<${elem} ${elemAttrString} />`;
  }

  svgString += '</svg>';

  try {
    fs.writeFileSync(fileName, svgString);
    console.log(`Successfully created ${fileName}`);
    filesCreated++;
  } catch (error) {
    console.error(`Error writing file:`, error);
  }
}

const parseIconData = (fileContent) => {
  try {
    // Use regex to get the svg details
    const attrsMatch = fileContent.match(/const attrs: IIconAttrs = (\{[^;]+?\});/s);
    const contentMatch = fileContent.match(/const content: IIconContent\[\] = (\[[^;]+?\]);/s);

    if (attrsMatch && contentMatch) {
      const attrs = new Function(`return ${attrsMatch[1]}`)();
      const content = new Function(`return ${contentMatch[1]}`)();
      return { attrs, content }
    }
  } catch (e) {
    console.error('Failed to parse icon data:', e);
  }
  return null;
};

const processDirectory = (currentPath, outputPath) => {
  fs.readdirSync(currentPath, { withFileTypes: true }).forEach(dirent =>{
    const fullPath = path.join(currentPath, dirent.name);
    if (dirent.isDirectory()) {
      processDirectory(fullPath, outputPath)
    } else if (dirent.isFile() && dirent.name === 'index.ts') {
      try {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const iconData = parseIconData(fileContent);

        if (iconData) {
          const relativeDir = path.relative(ICONS_DIR, path.dirname(fullPath));
          const outputDir = path.join(outputPath, relativeDir);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          const iconName = path.basename(path.dirname(fullPath));
          const svgFileName = path.join(outputDir, `${iconName}.svg`);
          convertToSvg(iconData.attrs, iconData.content, svgFileName);
        }
      } catch (error) {
        console.error(`Could not process file at ${fullPath}:`, error);
      }
    }
  })
}

const ICONS_DIR = `${process.cwd()}/src/apps`;
const OUTPUT_DIR = `${process.cwd()}/svg/apps`;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`Starting conversion from ${ICONS_DIR}...`);
processDirectory(ICONS_DIR, OUTPUT_DIR);
console.log(`Conversion complete. Created ${filesCreated} SVG file(s).`);