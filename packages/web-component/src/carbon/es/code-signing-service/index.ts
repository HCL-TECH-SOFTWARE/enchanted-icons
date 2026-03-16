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

export const ICON_NAME = `${ICON_PREFIX}icon-code-signing-service`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="25" cy="20" r="1" /><path d="M19.4141 30H15V25.5857l5.0337-5.0337A4.6069 4.6069 0 0120 20a5 5 0 114.4478 4.9663zM17 28h1.5859l5.2061-5.2063.5395.1238a3.0351 3.0351 0 10-2.249-2.2488l.1236.5393L17 26.4143zM6 8H8V16H6zM2 8H4V16H2zM18 8H20V14H18zM14 16H12a2 2 0 01-2-2V10a2 2 0 012-2h2a2 2 0 012 2v4A2 2 0 0114 16zm-2-2h2V10H12zM2 18H4V26H2zM14 18H16V22H14zM10 26H8a2 2 0 01-2-2V20a2 2 0 012-2h2a2 2 0 012 2v4A2 2 0 0110 26zM8 24h2V20H8zM2 2H4V6H2zM14 2H16V6H14zM18 2H20V6H18zM10 6H8A2 2 0 016 4V2H8V4h2V2h2V4A2 2 0 0110 6z" /></svg>`;
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
