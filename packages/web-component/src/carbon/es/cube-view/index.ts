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
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '16',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.7769,15.4785A8.64,8.64,0,0,0,16,10a8.64,8.64,0,0,0-7.7769,5.4785L8,16l.2231.5215A8.64,8.64,0,0,0,16,22a8.64,8.64,0,0,0,7.7769-5.4785L24,16ZM16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28.5039,8.1362l-12-7a1,1,0,0,0-1.0078,0l-12,7A1,1,0,0,0,3,9V23a1,1,0,0,0,.4961.8638l12,7a1,1,0,0,0,1.0078,0l12-7A1,1,0,0,0,29,23V9A1,1,0,0,0,28.5039,8.1362ZM27,22.4258,16,28.8423,5,22.4258V9.5742L16,3.1577,27,9.5742Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-cube-view`;
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
