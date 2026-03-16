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

export const ICON_NAME = `${ICON_PREFIX}icon-cabin-care`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.3022 2a2.6617 2.6617 0 00-1.9079.8059l-.3931.4053-.397-.4053a2.6613 2.6613 0 00-3.8158 0 2.7992 2.7992 0 000 3.8963L25.0012 11 29.21 6.7022a2.7992 2.7992 0 000-3.8963A2.6613 2.6613 0 0027.3022 2zM23.8218 18H15.083L11.8643 5.9653a4 4 0 00-7.7276 2.07L8.5454 24.5168A2 2 0 0010.4775 26H19v2H4v2H19a2 2 0 002-2V26h3a4.0046 4.0046 0 003.98-4.4A4.1214 4.1214 0 0023.8218 18zM24 24H10.4776L6.0686 7.5181A2 2 0 119.9324 6.4829L13.5466 20H24a2 2 0 010 4z" /></svg>`;
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
