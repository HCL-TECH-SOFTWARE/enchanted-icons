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
      "d": "M19.2803 14.4697C19.5407 14.73 19.5696 15.1342 19.3671 15.4265L19.2803 15.5303L17.7803 17.0303C17.4874 17.3232 17.0126 17.3232 16.7197 17.0303C16.4593 16.77 16.4304 16.3658 16.6329         16.0735L16.7197 15.9697L18.2197 14.4697C18.5126 14.1768 18.9874 14.1768 19.2803 14.4697Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M19.2803 11.4697C19.5407 11.73 19.5696 12.1342 19.3671 12.4265L19.2803 12.5303L14.7803 17.0303C14.4874 17.3232 14.0126 17.3232 13.7197 17.0303C13.4593 16.77 13.4304 16.3658 13.6329         16.0735L13.7197 15.9697L18.2197 11.4697C18.5126 11.1768 18.9874 11.1768 19.2803 11.4697Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M8.25 6.75V8.25H7.125V11.25H5.625V8.25H4.5V6.75H8.25Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M21 3.75C21.8284 3.75 22.5 4.42157 22.5 5.25V18.75C22.5 19.5784 21.8284 20.25 21 20.25H3C2.17157 20.25 1.5 19.5784 1.5 18.75V5.25C1.5 4.42157 2.17157 3.75 3 3.75H21ZM21         5.25H3V18.75H21V5.25Z",
      "fill": "currentColor",
      "stroke": "none",
      "strokeLinejoin": "round",
      "strokeMiterlimit": "10",
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  }
];

export const ICON_NAME = 'icon-page-elements-form-text-area';
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