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
      "d": "M18 10.5H15V8.25H18.75V6.75H15C14.1716 6.75 13.5 7.42157 13.5 8.25V15.75C13.5 16.5784 14.1716 17.25 15 17.25H18C18.8284 17.25 19.5 16.5784 19.5 15.75V12C19.5 11.1716 18.8284 10.5 18 10.5ZM15         15.75V12H18V15.75H15Z",
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
      "d": "M9 6.75V11.25H6V6.75H4.5V17.25H6V12.75H9V17.25H10.5V6.75H9Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  }
];

export const ICON_NAME = 'icon-page-elements-h6';
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