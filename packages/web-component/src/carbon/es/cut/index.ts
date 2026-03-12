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
      d: 'M26.5,19.63,20.24,16l6.26-3.63a5,5,0,0,0-1.21-9.2A5.19,5.19,0,0,0,24,3a5,5,0,0,0-4.33,7.53,5,5,0,0,0,2.39,2.1l-3.82,2.21L4,6.6,3,8.34,16.24,16,3,23.68l1,1.74,14.24-8.26,3.82,2.21a5,5,0,0,0-2.39,2.1A5,5,0,0,0,24,29a5.19,5.19,0,0,0,1.29-.17,5,5,0,0,0,1.21-9.2ZM21.4,9.53a3,3,0,0,1,1.1-4.12,3,3,0,0,1,4.1,1.11,3,3,0,0,1-1.1,4.11h0A3,3,0,0,1,21.4,9.53Zm5.2,16a3,3,0,0,1-4.1,1.11,3,3,0,0,1-1.1-4.12,3,3,0,0,1,4.1-1.1h0A3,3,0,0,1,26.6,25.48Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-cut`;
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
