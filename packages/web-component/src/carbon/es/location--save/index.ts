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
      d: 'M18 30h2V28a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V28a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 24a4 4 0 114-4A4.0042 4.0042 0 0124 24zm0-6a2 2 0 102 2A2.0023 2.0023 0 0024 18zM25.3418 10.06l-22-8A1 1 0 002.06 3.3415l8 22A1.001 1.001 0 0010.9839 26H11a1 1 0 00.9287-.6289L15.77 15.7692l9.6016-3.8408a1 1 0 00-.0293-1.8687zM14.6284 14.0709v0l-.3979.1591-.1591.3979 0 0-3.0269 7.5678L4.6719 4.6715l17.5244 6.3726z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-location-save`;
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
