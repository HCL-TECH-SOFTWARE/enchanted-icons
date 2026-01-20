/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
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

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M27.5 5a0.5 0.5 0 0 1 -1 0 0.5 0.5 0 0 1 1 0m1.5 -2.5c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-4 4c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1M7 24.5c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-2 2c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-2 2c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m26.255 0.245L23.575 23.066c1.799 -1.925 2.785 -4.42 2.785 -7.066 0 -5.712 -4.647 -10.36 -10.36 -10.36 -5.712 0 -10.36 4.648 -10.36 10.36 0 5.713 4.647 10.36 10.36 10.36 2.646 0 5.142 -0.986 7.066 -2.785l5.679 5.68zM25.64 16c0 2.574 -1.003 4.994 -2.824 6.815S18.574 25.64 16 25.64c-5.315 0 -9.64 -4.324 -9.64 -9.64S10.685 6.36 16 6.36s9.64 4.325 9.64 9.64M13.36 21v-2A0.36 0.36 0 0 0 13 18.64h-2A0.36 0.36 0 0 0 10.64 19v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 13.36 21m-2 -1.64h1.28v1.279h-1.28zm6 -2.36v-2A0.36 0.36 0 0 0 17 14.64h-2A0.36 0.36 0 0 0 14.64 15v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 17.36 17m-2 -1.64h1.28v1.28h-1.28zm6 -2.36v-2A0.36 0.36 0 0 0 21 10.64h-2A0.36 0.36 0 0 0 18.64 11v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 21.36 13m-2 -1.64h1.279v1.28H19.36z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  }
];

export const ICON_NAME = 'icon-items-search-initial';
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