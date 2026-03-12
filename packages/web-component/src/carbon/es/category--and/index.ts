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
      d: 'M4 30V26H15v4h2V26H28v4h2V26a2 2 0 00-2-2H17V19H15v5H4a2 2 0 00-2 2v4zM20.6953 13.9858A10.08 10.08 0 0021.9463 10H23V8H20V9a9.2634 9.2634 0 01-.6641 3.2705L16.6511 8.8816a5.1261 5.1261 0 002.1436-2.3694A3.2522 3.2522 0 0018.6062 3.81a3.38 3.38 0 00-2.2391-1.7056 3.4688 3.4688 0 00-4.2223 2.1186c-.5044 1.5518.4406 3.1158 1.2612 4.1077A4.7255 4.7255 0 0011.06 13.1587 4.4526 4.4526 0 0015.4268 17h.0058a5.7844 5.7844 0 003.9717-1.4233L20.532 17h2.5519zM14.047 4.8413A1.3224 1.3224 0 0115.4141 4a2.41 2.41 0 01.5214.0581 1.4018 1.4018 0 01.9111.7022 1.2493 1.2493 0 01.0791 1.042A3.6871 3.6871 0 0115.2441 7.395C14.5831 6.6816 13.8087 5.5732 14.047 4.8413zM15.4316 15h-.0039a2.4432 2.4432 0 01-2.3916-2.1509 2.8261 2.8261 0 011.81-3.0249l3.3115 4.1787A3.8853 3.8853 0 0115.4316 15z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-category-and`;
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
