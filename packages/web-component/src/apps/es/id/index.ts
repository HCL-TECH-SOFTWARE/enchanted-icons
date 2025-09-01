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
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';

const attrs: IIconAttrs = {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 24 24",
  "width": 24,
  "height": 24
};

const content: IIconContent[] = [
  {
    "elem": "path",
    "attrs": {
      "d": "M15 5.99994H12V17.9999H15C18 17.9999 19.5 16.4999 19.5 13.4999V10.4999C19.5 7.49994 18 5.99994 15 5.99994ZM17.25 13.4999C17.25 15.2669 16.767 15.7499 15 15.7499H14.25V8.24994H15C16.767         8.24994 17.25 8.73294 17.25 10.4999V13.4999Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10",
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M4.5 8.24994H6.375V15.7499H4.5V17.9999H10.5V15.7499H8.625V8.24994H10.5V5.99994H4.5V8.24994Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  }
];

export const ICON_NAME = 'icon-id';
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