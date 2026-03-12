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
      d: 'M24 19L21 19 21 16 19 16 19 19 16 19 16 21 19 21 19 24 21 24 21 21 24 21 24 19z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M31 29.5859l-4.6885-4.6884a8.028 8.028 0 10-1.414 1.414L29.5859 31zM20 26a6 6 0 116-6A6.0066 6.0066 0 0120 26zM4 8H2V4A2.0021 2.0021 0 014 2H8V4H4zM26 8H24V4H20V2h4a2.0021 2.0021 0 012 2zM12 2H16V4H12zM8 26H4a2.0021 2.0021 0 01-2-2V20H4v4H8zM2 12H4V16H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-zoom-in-area`;
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
