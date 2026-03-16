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

export const ICON_NAME = `${ICON_PREFIX}icon-categories`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M6.76 6l.45.89L7.76 8H12v5H4V6H6.76m.62-2H3A1 1 0 002 5v9a1 1 0 001 1H13a1 1 0 001-1V7a1 1 0 00-1-1H9L8.28 4.55A1 1 0 007.38 4zM22.76 6l.45.89L23.76 8H28v5H20V6h2.76m.62-2H19a1 1 0 00-1 1v9a1 1 0 001 1H29a1 1 0 001-1V7a1 1 0 00-1-1H25l-.72-1.45a1 1 0 00-.9-.55zM6.76 19l.45.89L7.76 21H12v5H4V19H6.76m.62-2H3a1 1 0 00-1 1v9a1 1 0 001 1H13a1 1 0 001-1V20a1 1 0 00-1-1H9l-.72-1.45a1 1 0 00-.9-.55zM22.76 19l.45.89L23.76 21H28v5H20V19h2.76m.62-2H19a1 1 0 00-1 1v9a1 1 0 001 1H29a1 1 0 001-1V20a1 1 0 00-1-1H25l-.72-1.45a1 1 0 00-.9-.55z" /></svg>`;
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
