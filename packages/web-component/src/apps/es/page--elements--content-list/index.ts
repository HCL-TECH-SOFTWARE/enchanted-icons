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

/* auto generated file - do not edit */
import { html } from 'lit';
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M21 12C21.8284 12 22.5 12.6716 22.5 13.5V21C22.5 21.8284 21.8284 22.5 21 22.5H13.5C12.6716 22.5 12 21.8284 12 21V13.5C12 12.6716 12.6716 12 13.5 12H21ZM21 19.5H13.5V21H21V19.5ZM21 16.5H13.5V18H21V16.5ZM21 13.5H13.5V15H21V13.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19.5 1.5C20.3284 1.5 21 2.17157 21 3V10.5H19.5V3H3V19.5H10.5V21H3C2.17157 21 1.5 20.3284 1.5 19.5V3C1.5 2.17157 2.17157 1.5 3 1.5H19.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.5 12C8.32843 12 9 12.6716 9 13.5V15C9 15.8284 8.32843 16.5 7.5 16.5H6C5.17157 16.5 4.5 15.8284 4.5 15V13.5C4.5 12.6716 5.17157 12 6 12H7.5ZM7.5 13.5H6V15H7.5V13.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.5 6C8.32843 6 9 6.67157 9 7.5V9C9 9.82843 8.32843 10.5 7.5 10.5H6C5.17157 10.5 4.5 9.82843 4.5 9V7.5C4.5 6.67157 5.17157 6 6 6H7.5ZM7.5 7.5H6V9H7.5V7.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M18 7.5V9H10.5V7.5H18Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  }
];

export const ICON_NAME = 'icon-page-elements-content-list';
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