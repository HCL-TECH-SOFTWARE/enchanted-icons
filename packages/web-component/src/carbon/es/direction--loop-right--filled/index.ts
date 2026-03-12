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
      fill: 'none',
      d: 'M16,26H14V18h2ZM21,8,19.5859,9.4141,24.1719,14H11a3,3,0,1,1,3-3v1h2V11a5,5,0,1,0-5,5H24.1719l-4.586,4.5859L21,22l7-7Z',
      'data-icon-path': 'inner-path'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM16,26H14V18h2Zm5-4-1.4141-1.4141L24.1719,16H11a5,5,0,1,1,5-5v1H14V11a3,3,0,1,0-3,3H24.1719l-4.586-4.5859L21,8l7,7Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-direction-loop-right-filled`;
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
