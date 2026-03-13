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

export const ICON_NAME = `${ICON_PREFIX}icon-data-view-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="22" cy="24" r="2" /><path d="M29.7769 23.4785A8.64 8.64 0 0022 18a8.64 8.64 0 00-7.7769 5.4785L14 24l.2231.5215A8.64 8.64 0 0022 30a8.64 8.64 0 007.7769-5.4785L30 24zM22 28a4 4 0 114-4A4.0045 4.0045 0 0122 28zM7 17H12V19H7zM7 12H19V14H7zM7 7H19V9H7z" /><path d="M22,2,4,2A2.0058,2.0058,0,0,0,2,4V28a2.0058,2.0058,0,0,0,2,2h8V28H4V4H22V15h2V4A2.0058,2.0058,0,0,0,22,2Z" /></svg>`;
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
