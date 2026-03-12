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
      d: 'M29,14a1,1,0,0,0,1-1V8a2,2,0,0,0-2-2H4A2,2,0,0,0,2,8v5a1,1,0,0,0,1,1,2,2,0,0,1,0,4,1,1,0,0,0-1,1v5a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V19a1,1,0,0,0-1-1,2,2,0,0,1,0-4Zm-1,5.87V24H21V21H19v3H4V19.87a4,4,0,0,0,0-7.74V8H19v3h2V8h7v4.13a4,4,0,0,0,0,7.74Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 13H21V19H19z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-ticket`;
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
