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

export const ICON_NAME = `${ICON_PREFIX}icon-encryption`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29 21.2783V19a4 4 0 00-8 0v2.2783A1.9935 1.9935 0 0020 23v5a2.0025 2.0025 0 002 2h6a2.0025 2.0025 0 002-2V23A1.9935 1.9935 0 0029 21.2783zM25 17a2.0025 2.0025 0 012 2v2H23V19A2.0025 2.0025 0 0125 17zM22 28V23h6v5zM2 2H4V6H2zM14 2H16V6H14zM18 2H20V6H18zM2 8H4V16H2zM2 18H4V26H2zM14 18H16V26H14zM6 8H8V16H6zM18 8H20V14H18zM10 26H8a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2h2a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0110 26zM8 20v4h2V20zM14 16H12a2.0023 2.0023 0 01-2-2V10a2.0023 2.0023 0 012-2h2a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0114 16zm-2-6v4h2V10zM10 6H8A2.0023 2.0023 0 016 4V2H8V4h2V2h2V4A2.0023 2.0023 0 0110 6z" /></svg>`;
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
