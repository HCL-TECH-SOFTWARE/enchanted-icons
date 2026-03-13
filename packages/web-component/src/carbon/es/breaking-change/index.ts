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
import { BaseIcon } from '../../../utils/base-icon';
import { canDefine } from '../../../utils';
import { ICON_PREFIX } from '../../../utils/tags';

export const ICON_NAME = `${ICON_PREFIX}icon-breaking-change`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M31 25a6 6 0 10-6 6A6.0066 6.0066 0 0031 25zm-2 0a3.9521 3.9521 0 01-.5669 2.019L22.981 21.5669A3.9529 3.9529 0 0125 21 4.0045 4.0045 0 0129 25zm-8 0a3.9521 3.9521 0 01.5669-2.019l5.4521 5.4521A3.9529 3.9529 0 0125 29 4.0045 4.0045 0 0121 25zM19.59 16L17 18.59 18.42 20 22.42 16 18.42 12 17 13.41 19.59 16zM10.41 16L13 13.41 11.58 12 7.58 16 11.58 20 13 18.59 10.41 16z" /><path d="M4,9H26v7h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H16V24H4ZM4,4H26V7H4Z" /></svg>`;
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
