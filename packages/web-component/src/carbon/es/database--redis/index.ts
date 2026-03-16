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

export const ICON_NAME = `${ICON_PREFIX}icon-database-redis`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25.7156 22h-.115a3.371 3.371 0 01-3.3113 2.2764c-3.0124 0-4.6912-2.2764-4.6912-6.3006 0-4.0012 1.6788-6.2546 4.6912-6.2546a3.3049 3.3049 0 013.3113 2.2534h.115v-6.99h2.9433V24H25.7156zm0-2.1157V16.0667c0-1.1727-1.0808-1.9314-2.4837-1.9314A2.556 2.556 0 0020.68 16.9636v2.07a2.5365 2.5365 0 002.5522 2.8052C24.6348 21.8384 25.7156 21.1257 25.7156 19.8838zM6.5576 24H3.5222V7.95h7.2434c2.92 0 4.7371 1.9316 4.7371 4.967a4.4237 4.4237 0 01-2.9893 4.553L15.8018 24h-3.38L9.4321 17.8145H6.5576zm3.9092-8.738a1.6888 1.6888 0 001.8855-1.8167V12.3875a1.6722 1.6722 0 00-1.8855-1.7935H6.5576v4.668z" /></svg>`;
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
