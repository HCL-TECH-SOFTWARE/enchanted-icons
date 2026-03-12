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
      d: 'M24,24v4H8V24H6v4H6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2h0V24Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21 21L19.586 19.586 17 22.172 17 14 15 14 15 22.172 12.414 19.586 11 21 16 26 21 21zM28 4L28 2 22 2 22 12 24 12 24 8 27 8 27 6 24 6 24 4 28 4zM17 12H13V2h4a3.0033 3.0033 0 013 3V9A3.0033 3.0033 0 0117 12zm-2-2h2a1.0011 1.0011 0 001-1V5a1.0011 1.0011 0 00-1-1H15zM9 2H4V12H6V9H9a2.0027 2.0027 0 002-2V4A2.0023 2.0023 0 009 2zM6 7V4H9l.001 3z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-generate-pdf`;
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
