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

export const ICON_NAME = `${ICON_PREFIX}icon-virtual-column-key`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="24.5" cy="9.5" r="1.5" /><path d="M17.4143,22H12V16.5857l6.03-6.03A5.3518,5.3518,0,0,1,18,10a6,6,0,1,1,6,6,5.3583,5.3583,0,0,1-.5559-.03ZM14,20h2.5857l6.1706-6.1709.5174.0957A3.935,3.935,0,0,0,24,14a4.0507,4.0507,0,1,0-3.925-3.2729l.0952.5166L14,17.4143Z" /><path d="M28,18v8H10V6h4V4H4A2.0025,2.0025,0,0,0,2,6V26a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V18ZM4,6H8V26H4Z" /></svg>`;
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
