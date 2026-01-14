/* ======================================================================== *
  * Copyright 2024-2026 HCL America Inc.                                          *
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
      d: 'M8.25 9.75V11.25H7.125V14.25H5.625V11.25H4.5V9.75H8.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21 6.75C21.8284 6.75 22.5 7.42157 22.5 8.25V15.75C22.5 16.5784 21.8284 17.25 21 17.25H3C2.17157 17.25 1.5 16.5784 1.5 15.75V8.25C1.5 7.42157 2.17157 6.75 3 6.75H21ZM21 8.25H3V15.75H21V8.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  }
];

export const ICON_NAME = 'icon-page-elements-form-input';
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