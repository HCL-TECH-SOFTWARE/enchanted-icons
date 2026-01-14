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
      d: 'M19.5 17.25H13.5V12.75C13.5 11.9216 14.1716 11.25 15 11.25H18V8.25H13.5V6.75H18C18.8284 6.75 19.5 7.42157 19.5 8.25V11.25C19.5 12.0784 18.8284 12.75 18 12.75H15V15.75H19.5V17.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M9 6.75V11.25H6V6.75H4.5V17.25H6V12.75H9V17.25H10.5V6.75H9Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  }
];

export const ICON_NAME = 'icon-page-elements-h2';
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