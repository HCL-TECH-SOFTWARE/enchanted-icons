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

export const ICON_NAME = `${ICON_PREFIX}icon-instance-bx`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12 5A3.0033 3.0033 0 009 2H4V15H9a3.0033 3.0033 0 003-3V10.5a2.977 2.977 0 00-.78-2 2.9768 2.9768 0 00.78-2zM6 4H9a1.0013 1.0013 0 011 1V6.5513A.9587.9587 0 019 7.5H6zm4 8a1.0009 1.0009 0 01-1 1H6V9.5H9a1.0009 1.0009 0 011 1zM22 5L20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z" /><circle cx="9" cy="27" r="1" /><path d="M2 18H6V20H2zM8 18H12V20H8zM14 18H18V20H14zM20 18H24V20H20zM26 18H30V20H26zM26 31H6a2.0021 2.0021 0 01-2-2V25a2.0021 2.0021 0 012-2H26a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0126 31zM6 25v4H26V25z" /></svg>`;
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
