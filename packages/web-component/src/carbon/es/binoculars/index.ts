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
      d: 'M28,8V5a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V8a2,2,0,0,0-2,2v2H14V10a2,2,0,0,0-2-2V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V8a2,2,0,0,0-2,2V22a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,14,22V20h4v2a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,30,22V10A2,2,0,0,0,28,8ZM11,26H5V24h6Zm1-4H4V10H6V6h4v4h2Zm2-4V14h4v4Zm13,8H21V24h6Zm1-4H20V10h2V6h4v4h2Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-binoculars`;
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
