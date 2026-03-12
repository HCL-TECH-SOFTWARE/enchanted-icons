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
      d: 'M26 9.42L24.59 8 22.005 10.585 22 10.58 21.995 10.585 19.42 8.01 18 9.42 20.58 12 18 14.58 19.41 16 21.995 13.415 22 13.42 22.005 13.415 24.58 15.99 26 14.58 23.42 12 26 9.42zM14 17.42L12.59 16 10.005 18.585 10 18.58 9.995 18.585 7.42 16.01 6 17.42 8.58 20 6 22.58 7.41 24 9.995 21.415 10 21.42 10.005 21.415 12.58 23.99 14 22.58 11.42 20 14 17.42zM2 2H4V30H2zM28 2H30V30H28zM15 2H17V6H15zM15 10H17V14H15zM15 18H17V22H15zM15 26H17V30H15z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-traffic-flow-incident`;
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
