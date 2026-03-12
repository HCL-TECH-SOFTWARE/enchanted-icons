/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';
import { ICON_PREFIX } from '../../../utils/tags';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  fill: 'currentColor',
  width: 32,
  height: 32
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M2 22H30V24H2zM2 26H30V28H2zM24 10a2 2 0 102 2 2 2 0 00-2-2zM16 16a4 4 0 114-4A4.0045 4.0045 0 0116 16zm0-6a2 2 0 102 2A2.002 2.002 0 0016 10zM8 10a2 2 0 102 2 2 2 0 00-2-2z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,20H4a2.0051,2.0051,0,0,1-2-2V6A2.0051,2.0051,0,0,1,4,4H28a2.0051,2.0051,0,0,1,2,2V18A2.0027,2.0027,0,0,1,28,20ZM28,6H4V18H28Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-money`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`${createSvgIcon(content, attrs)}`;
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
