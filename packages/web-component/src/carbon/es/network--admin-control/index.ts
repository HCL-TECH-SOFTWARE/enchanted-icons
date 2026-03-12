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
      d: 'M27 20.415L25.586 19 23 21.587 20.414 19 19 20.415 21.586 23 19 25.586 20.414 27 23 24.414 25.586 27 27 25.586 24.414 23 27 20.415zM24 4a4.0045 4.0045 0 00-4 4 3.951 3.951 0 00.5669 2.019L10.019 20.5669A3.9521 3.9521 0 008 20a4 4 0 104 4 3.951 3.951 0 00-.5669-2.019L21.981 11.4331A3.9521 3.9521 0 0024 12a4 4 0 000-8zM8 26a2 2 0 112-2A2.0023 2.0023 0 018 26zM24 10a2 2 0 112-2A2.0023 2.0023 0 0124 10zM8 11.18L5.41 8.59 4 10 8 14 15 7 13.59 5.59 8 11.18z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-network-admin-control`;
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
