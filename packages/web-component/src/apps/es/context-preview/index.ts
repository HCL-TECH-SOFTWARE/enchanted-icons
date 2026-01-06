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
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M25 2H7C6.47004 2.00153 5.96222 2.21274 5.58748 2.58748C5.21274 2.96222 5.00153 3.47004 5 4V28C5.00153 28.53 5.21274 29.0378 5.58748 29.4125C5.96222 29.7873 6.47004 29.9985 7 30H25C26.1046 30 27 29.1046 27 28V4C26.9985 3.47004 26.7873 2.96222 26.4125 2.58748C26.0378 2.21274 25.53 2.00153 25 2ZM25 28H7V4H25V28ZM19 16H10V18H19V16ZM10 20H15V22H10V20ZM12 8H20V12H12V8ZM10 8C10 6.89543 10.8954 6 12 6H20C21.1046 6 22 6.89543 22 8V12C22 13.1046 21.1046 14 20 14H12C10.8954 14 10 13.1046 10 12V8Z',
      fill: 'black',
      fillOpacity: 0.6
    }
  }
];

export const ICON_NAME = 'icon-context-preview';
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