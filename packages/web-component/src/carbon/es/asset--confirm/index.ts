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
      d: 'M21 27.18L18.41 24.59 17 26 21 30 28 23 26.59 21.59 21 27.18zM12 24a4 4 0 114-4A4.0042 4.0042 0 0112 24zm0-6a2 2 0 102 2A2.0023 2.0023 0 0012 18z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,2a3.86,3.86,0,0,0-1.85.48L7.76,10.96A9.99,9.99,0,0,0,12,30a9.3445,9.3445,0,0,0,2-.21V27.75A8.2289,8.2289,0,0,1,12,28a8,8,0,1,1,8-8,8.2656,8.2656,0,0,1-.06,1h2.78L29.56,7.79A3.9727,3.9727,0,0,0,26,2ZM21.86,18.34a10.0187,10.0187,0,0,0-8.22-8.19l8.38-4.34c0,.06-.02.12-.02.19a3.9989,3.9989,0,0,0,4,4c.06,0,.12-.02.19-.02ZM26,8a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,26,8Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-asset-confirm`;
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
