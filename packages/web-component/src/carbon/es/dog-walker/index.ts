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
      d: 'M20 20H22V30H20zM4 23H6V30H4z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16 30H14V26a1.0011 1.0011 0 00-1-1H11v5H9V23h4a3.0033 3.0033 0 013 3zM7.5 22A3.5041 3.5041 0 014 18.5V17H2V15H6v3.5a1.5 1.5 0 003 0V15h4v2H11v1.5A3.5041 3.5041 0 017.5 22zM27 10H21.354a2.9861 2.9861 0 00-2.7856 1.8857l-1.4419 3.6055-3.6079 4.51 1.562 1.249 3.7-4.625 1.645-3.9961A.9949.9949 0 0121.354 12H27a1.0009 1.0009 0 011 1v7H25V30h2V22h1a2.0023 2.0023 0 002-2V13A3.0033 3.0033 0 0027 10zM24 9a4 4 0 114-4A4.0045 4.0045 0 0124 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0024 3z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-dog-walker`;
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
