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
  "width": 16,
  "height": 16,
  "viewBox": "0 0 16 16",
  "xmlns": "http://www.w3.org/2000/svg"
};

const content: IIconContent[] = [
  {
    "elem": "path",
    "attrs": {
      "d": "M7.99999 12C7.91844 12 7.83689 11.9801 7.76294 11.9402L1.26294 8.4402L1.73704 7.55985L7.99999 10.9322L14.2629 7.55985L14.737 8.4402L8.23704 11.9402C8.16309 11.9801 8.08154 12 7.99999 12Z",
      "fill": "currentColor"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M7.99999 15C7.91844 15 7.83689 14.9801 7.76294 14.9402L1.26294 11.4402L1.73704 10.5599L7.99999 13.9322L14.2629 10.5599L14.737 11.4402L8.23704 14.9402C8.16309 14.9801 8.08154 15 7.99999 15Z",
      "fill": "currentColor"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M14.737 4.5598L7.99999 0.932152V2.0679L13.4453 5.00005L7.99999 7.9322V9.06795L14.737 5.44025C14.899 5.3531 15 5.18415 15 5.00005C15 4.81595 14.899 4.64695 14.737 4.5598Z",
      "fill": "currentColor"
    }
  },
  {
    "elem": "path",
    "attrs": {
      "d": "M2.20704 4.70705L3.99999 2.91405V7H4.99999V2.91405L6.79294 4.707L7.49999 4L4.49999 1L1.49999 4L2.20704 4.70705Z",
      "fill": "currentColor"
    }
  }
];

export const ICON_NAME = 'icon-layers-external';
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