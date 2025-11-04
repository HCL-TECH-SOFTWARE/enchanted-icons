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
      d: 'M19.5 13.4999V14.9999H15V13.4999H19.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19.5 11.2499V12.7499H15V11.2499H19.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19.5 8.99994V10.4999H15V8.99994H19.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21 5.99994C21.8284 5.99994 22.5 6.67151 22.5 7.49994V16.4999C22.5 17.3284 21.8284 17.9999 21 17.9999H3C2.17157 17.9999 1.5 17.3284 1.5 16.4999V7.49994C1.5 6.67151 2.17157 5.99994 3 5.99994H21ZM21 7.49994H3V16.4999H21V7.49994Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  }
];

export const ICON_NAME = 'icon-page-elements-navigation';
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