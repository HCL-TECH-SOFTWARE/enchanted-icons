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


import stringifyObject from 'stringify-object';


export const createCarbonReactIcon = (iconName, size, subFolder, isRenamed, originalName, copyrightYear) => {
  const iconImportPath = `@carbon/icons/es${subFolder ? `/${subFolder}` : ''}/${isRenamed ? originalName : iconName}/${size}`;
  const utilsImport = '../../../utils';
  return `/* ======================================================================== *
  * Copyright ${copyrightYear} HCL America Inc.                                          *
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
import Icon from '${iconImportPath}';
import { createSvgIcon } from '${utilsImport}';

export default createSvgIcon(Icon.name, Icon.size, Icon.content, Icon.attrs);
`;
};

export const createCarbonWebComponentIcon = (iconName, size, originalName, copyrightYear) => {
  const iconNameConstant = `icon-${iconName.toLowerCase().replace(/-+/g, '-')}`;
  return `/* ======================================================================== *
  * Copyright ${copyrightYear} HCL America Inc.                                          *
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
import { html } from 'lit';
import Icon from '@carbon/icons/es/${originalName}/${size}';
import { toSVG } from '@carbon/icon-helpers';
import { BaseIcon } from '../../../utils/base-icon';
import { canDefine } from '../../../utils';

export const ICON_NAME = '${iconNameConstant}';
export class WebComponentIcon extends BaseIcon {
  render() {
    return html\`\${toSVG({...Icon, attrs: { ...Icon.attrs, preserveAspectRatio: 'xMidYMid'}})}\`;
  }
} 

if (canDefine && !customElements.get(ICON_NAME)) {
  customElements.define(ICON_NAME, WebComponentIcon);
}
declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}
`;
};

export const createCustomReactIcon = (iconName, size, content, attrs, utilsImportPath, copyrightString) => {
  const stringifyOptions = {
    indent: '  ',
  };

  const attrsString = stringifyObject(attrs, stringifyOptions);
  const contentString = stringifyObject(content, stringifyOptions);
  return`/* ======================================================================== *
 * Copyright ${copyrightString} HCL America Inc.                                          *
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
import { createSvgIcon, IIconAttrs, IIconContent } from '${utilsImportPath}';

const attrs: IIconAttrs = ${attrsString};

const content: IIconContent[] = ${contentString};

export default createSvgIcon('${iconName}', ${size}, content, attrs);
`;
};

export const createCustomWebComponentIcon = (iconName, size, content, attrs, utilsImportPath, copyrightString) => {
  const iconNameConstant = `icon-${iconName.toLowerCase().replace(/-+/g, '-')}`;

  const stringifyOptions = {
    indent: '  ',
  };

  const attrsString = stringifyObject(attrs, stringifyOptions);
  let contentString = stringifyObject(content, stringifyOptions);
  
  return`/* ======================================================================== *
  * Copyright ${copyrightString} HCL America Inc.                                          *
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
import { html } from 'lit';
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '${utilsImportPath}';
import { BaseIcon } from '${utilsImportPath}/base-icon';

const attrs: IIconAttrs = ${attrsString};

const content: IIconContent[] = ${contentString};

export const ICON_NAME = '${iconNameConstant}';
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
};