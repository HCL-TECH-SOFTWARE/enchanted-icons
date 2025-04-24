/* eslint-disable */
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const createIconContent = (iconName, size, subFolder, isRenamed, orignalName) => {
  let utilsImport = `'../../../utils'`;
  if (!_.isEmpty(subFolder)) {
    utilsImport = `'../../../../utils'`;
  }
  return `/* ======================================================================== *
  * Copyright 2024 HCL America Inc.                                          *
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

/* auto generated file - do not edit */
import Icon from '@carbon/icons/es${!_.isEmpty(subFolder) ? `/${subFolder}` : ''}/${isRenamed ? orignalName: iconName}/${size}';
import { createSvgIcon } from ${utilsImport};

export default createSvgIcon(Icon.name, Icon.size, Icon.content, Icon.attrs);
`;
};

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

const iconSize = '32';
let createSuccess = 0;
let createFailed = 0;
let testFileImportContent = '';
let testFileRender = '';

const createContent = (source, desitination, subFolder) => {
  const sourcePath = `${source}/${subFolder}`;
  const desitinationPath = `${desitination}/${subFolder}`;
  console.info(`sourcePath: ${sourcePath}`);
  console.info(`desitinationPath: ${desitinationPath}`);

  // Fetch icons from exclude_rename_icons.json to be excluded and renamed
  const excludedAndRenamedIcons = fs.readFileSync('./exclude_rename_icons.json', 'utf8');
  const renames = JSON.parse(excludedAndRenamedIcons).renames;
  const renamedMap = new Map(Object.entries(renames));
  const excludedArray= JSON.parse(excludedAndRenamedIcons).excludes;

  removeDirSync(desitinationPath);
  ensureDirSync(desitinationPath);
  const files = fs.readdirSync(sourcePath);

  for (let i = 0; i < files.length; i++) {
    let iconName = files[i];
    // Not creating component for excluded icons
    if (excludedArray.includes(iconName)) {
      continue;
    }
    const camelCaseIconName = `Icon${_.upperFirst(_.camelCase(subFolder))}${_.upperFirst(_.camelCase(iconName))}`;

    const iconPath = path.join(sourcePath, iconName);
    const iconFile = `${iconPath}/${iconSize}.js`;
    if (fs.existsSync(iconFile)) {
      let isRenamed = false;
      let orignalName = iconName;
      if (renamedMap.has(iconName)) {
        // Rename icons
        iconName = renamedMap.get(iconName);
        isRenamed = true;
      }
      const filePath = path.join(desitinationPath, iconName);
      ensureDirSync(filePath);
      const fileName = `${filePath}/index.tsx`;
      const iconContent = createIconContent(iconName, iconSize, subFolder, isRenamed, orignalName);
      // console.info(`> create file ... - '${fileName}'`);
      try {
        fs.writeFileSync(fileName, iconContent);

        if (!_.isEqual(iconName, 'Q') && !_.isEqual(iconName, 'watson-health')) {
          testFileImportContent = `${testFileImportContent}
import ${camelCaseIconName} from 'enchanted-icons/dist/carbon/es${_.isEmpty(subFolder) ? '' : `/${subFolder}` }/${iconName}';`;

          testFileRender = `${testFileRender}
        {renderRow('..${_.isEmpty(subFolder) ? '' : `/${subFolder}` }/${iconName}', <${camelCaseIconName} style={{ 'fontSize': '3em'}} />)}`;
        }

        createSuccess += 1;
        // console.info(`< create file done - '${fileName}'`);
      } catch (err) {
        createFailed += 1;
        throw err;
      }
    }
  };
};

console.info('START - Create generate icons');
const rootSourcePath = `${process.cwd()}/node_modules/@carbon/icons/es`;
const rootDesitinationPath = `${process.cwd()}/src/carbon/es`;

// Create all wrapped components
createContent(rootSourcePath, rootDesitinationPath, '');

console.info(`createSuccess: ${createSuccess}`);
console.info(`createFailed: ${createFailed}`);
console.info('DONE - Create generate icons');
