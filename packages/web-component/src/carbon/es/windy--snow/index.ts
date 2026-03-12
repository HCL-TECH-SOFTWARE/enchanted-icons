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
      d: 'M25 28a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H6V18H25a5 5 0 010 10zM23 15H10V13H23a3 3 0 10-3-3H18a5 5 0 115 5z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M11 23H13V25H11zM13 25H15V27H13zM15 27H17V29H15zM15 23H17V25H15zM11 27H13V29H11zM6 4H8V6H6zM8 6H10V8H8zM10 8H12V10H10zM10 4H12V6H10zM6 8H8V10H6zM2 26H4V28H2zM4 28H6V30H4zM6 30H8V32H6zM6 26H8V28H6zM2 30H4V32H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-windy-snow`;
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
