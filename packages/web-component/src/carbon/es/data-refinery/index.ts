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
      d: 'M7,30a5,5,0,1,1,5-5A5.0059,5.0059,0,0,1,7,30Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,7,22Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M24,26H14V24H24V17H8a2.0021,2.0021,0,0,1-2-2V8A2.0021,2.0021,0,0,1,8,6H18V8H8v7H24a2.0021,2.0021,0,0,1,2,2v7A2.0021,2.0021,0,0,1,24,26Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,12H22a2.0023,2.0023,0,0,1-2-2V4a2.0023,2.0023,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v6A2.0023,2.0023,0,0,1,28,12ZM22,4v6h6V4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-refinery`;
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
