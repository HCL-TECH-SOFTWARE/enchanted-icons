/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
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

import { html } from 'lit';
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../../../utils';
import { BaseIcon } from '../../../../../utils/base-icon';

const attrs: IIconAttrs = {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 32 32",
  "width": 32,
  "height": 32
};

const content: IIconContent[] = [
  {
    "elem": "path",
    "attrs": {
      "d": "M24,9 C25.1045695,9 26,9.8954305 26,11 L26,11 L26,21 C26,22.1045695 25.1045695,23 24,23 L24,23 L18,23 L18,21 L24,21 L24,17 L20,17 L20,15 L24,15 L24,11 L18,11            L18,9 Z M8,9 L8,15 L12,15 L12,9 L14,9 L14,23 L12,23 L12,17 L8,17 L8,23 L6,23 L6,9 L8,9 Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  }
];

export const ICON_NAME = 'icon-h3';
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