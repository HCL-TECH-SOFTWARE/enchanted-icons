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
      d: 'M7 12H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4H7V6H4v4H7zM9 10H15V12H9zM17 10H23V12H17zM28 12H25V10h3V6H25V4h3a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 12zM17 4H23V6H17zM9 4H15V6H9zM28 28H4a2.0023 2.0023 0 01-2-2V22a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 28zM4 22v4H28V22zM2 15H30V17H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-name-space`;
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
