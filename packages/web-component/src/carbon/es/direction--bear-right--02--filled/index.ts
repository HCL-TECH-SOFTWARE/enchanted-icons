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
      d: 'M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM6,7.4141,7.4141,6,14,12.5859,12.5859,14ZM26,16H24V9.4141L17.4644,15.95A4.9683,4.9683,0,0,0,16,19.4854V26H14V19.4854a6.954,6.954,0,0,1,2.05-4.95L22.5859,8H16V6H26Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      fill: 'none',
      d: 'M26,6V16H24V9.4141L17.4644,15.95A4.9683,4.9683,0,0,0,16,19.4854V26H14V19.4854a6.954,6.954,0,0,1,2.05-4.95L22.5859,8H16V6ZM14,12.5859,7.4141,6,6,7.4141,12.5859,14Z',
      'data-icon-path': 'inner-path'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-direction-bear-right-02-filled`;
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
