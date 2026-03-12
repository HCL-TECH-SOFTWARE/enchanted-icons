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
      d: 'M21 25L16 30 11 25 12.409 23.581 15 26.153 15 19 17 19 17 26.206 19.591 23.581 21 25zM24 11L19 16 24 21 25.419 19.591 22.847 17 30 17 30 15 22.794 15 25.419 12.409 24 11zM8 11L13 16 8 21 6.581 19.591 9.153 17 2 17 2 15 9.206 15 6.581 12.409 8 11zM12.4289 5.8227v1.63a1.1269 1.1269 0 01-.6767 1.026l-1.39.5967A1.1218 1.1218 0 019.14 8.8424L7.3208 7.0233a1.1165 1.1165 0 01.0125-1.579l.0348-.0328c7.393-6.527 14.6913-2.0374 17.2127-.0473a1.1166 1.1166 0 01.1746 1.5693 1.1011 1.1011 0 01-.0873.0971L22.9108 8.7878a1.1114 1.1114 0 01-1.2225.2329l-1.39-.5967a1.1112 1.1112 0 01-.68-1.0223v-1.63S15.9726 3.0648 12.4289 5.8227z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-router-voice`;
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
