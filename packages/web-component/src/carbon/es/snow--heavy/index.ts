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

export const ICON_NAME = `${ICON_PREFIX}icon-snow-heavy`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4 26H6V28H4zM6 28H8V30H6zM8 30H10V32H8zM8 26H10V28H8zM4 30H6V32H4zM8 18H10V20H8zM10 20H12V22H10zM12 22H14V24H12zM12 18H14V20H12zM8 22H10V24H8zM18 18H20V20H18zM20 20H22V22H20zM22 22H24V24H22zM22 18H24V20H22zM18 22H20V24H18zM14 26H16V28H14zM16 28H18V30H16zM18 30H20V32H18zM18 26H20V28H18zM14 30H16V32H14z" /><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.4957,6.4957,0,0,0,6,21.4985v-2.26A4.4943,4.4943,0,0,1,8.144,11.019l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4944,4.4944,0,0,1,26,19.2383v2.26A6.4958,6.4958,0,0,0,24.8008,9.1362Z" /></svg>`;
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
