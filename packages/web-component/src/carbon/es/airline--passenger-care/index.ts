/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import { ICON_PREFIX } from '../../../utils/tags';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  fill: 'currentColor',
  width: 32,
  height: 32
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M18 23H16V21a3.0033 3.0033 0 00-3-3H9a3.0033 3.0033 0 00-3 3v2H4V21a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM11 6A3 3 0 118 9a3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0011 4zM2 26H30V28H2zM27.303 8a2.6616 2.6616 0 00-1.9079.8058L25 9.2112l-.3951-.4054a2.6615 2.6615 0 00-3.8157 0 2.7992 2.7992 0 000 3.8964L25 17l4.2108-4.2978a2.7992 2.7992 0 000-3.8964A2.6616 2.6616 0 0027.303 8z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-airline-passenger-care`;
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
