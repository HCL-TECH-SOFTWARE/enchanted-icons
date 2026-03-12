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
      d: 'M5 25V15.8281l-3.5859 3.586L0 18l6-6 6 6-1.4141 1.4141L7 15.8281V25H19v2H7A2.0024 2.0024 0 015 25zM24 22h4a2.002 2.002 0 012 2v4a2.002 2.002 0 01-2 2H24a2.002 2.002 0 01-2-2V24A2.002 2.002 0 0124 22zm4 6V24H23.9985L24 28zM27 6v9.1719l3.5859-3.586L32 13l-6 6-6-6 1.4141-1.4141L25 15.1719V6H13V4H25A2.0024 2.0024 0 0127 6zM2 6H8V8H2zM2 2H10V4H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-share`;
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
