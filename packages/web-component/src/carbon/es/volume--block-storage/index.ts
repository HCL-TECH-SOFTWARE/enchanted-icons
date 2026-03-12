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
      d: 'M17 21H10V14h7zm-5-2h3V16H12zM17 30H10V23h7zm-5-2h3V25H12zM26 21H19V14h7zm-5-2h3V16H21zM26 30H19V23h7zm-5-2h3V25H21z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8,28H4a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,4,4h7.5857A1.9865,1.9865,0,0,1,13,4.5859L16.4143,8H28a2.0023,2.0023,0,0,1,2,2v8H28V10H15.5857l-4-4H4V26H8Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-volume-block-storage`;
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
