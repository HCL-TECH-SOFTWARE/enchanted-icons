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
      d: 'M15 20H9a3 3 0 00-3 3v2H8V23a1 1 0 011-1h6a1 1 0 011 1v2h2V23A3 3 0 0015 20zM12 19a4 4 0 10-4-4A4 4 0 0012 19zm0-6a2 2 0 11-2 2A2 2 0 0112 13z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,19v9H4V8H16V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V19Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M20 19H26V21H20zM22 23H26V25H22zM32 10V8H29.8989a4.9678 4.9678 0 00-.7319-1.7529l1.49-1.49-1.414-1.414-1.49 1.49A4.9678 4.9678 0 0026 4.1011V2H24V4.1011a4.9678 4.9678 0 00-1.7529.7319l-1.49-1.49-1.414 1.414 1.49 1.49A4.9678 4.9678 0 0020.1011 8H18v2h2.1011a4.9678 4.9678 0 00.7319 1.7529l-1.49 1.49 1.414 1.414 1.49-1.49A4.9678 4.9678 0 0024 13.8989V16h2V13.8989a4.9678 4.9678 0 001.7529-.7319l1.49 1.49 1.414-1.414-1.49-1.49A4.9678 4.9678 0 0029.8989 10zm-7 2a3 3 0 113-3A3.0033 3.0033 0 0125 12z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-id-management`;
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
