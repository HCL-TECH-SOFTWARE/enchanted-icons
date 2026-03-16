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

export const ICON_NAME = `${ICON_PREFIX}icon-intrusion-prevention`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="22" cy="23.887" r="2" /><path d="M29.7769 23.4785A8.64 8.64 0 0022 18a8.64 8.64 0 00-7.7769 5.4785L14 24l.2231.5215A8.64 8.64 0 0022 30a8.64 8.64 0 007.7769-5.4785L30 24zM22 28a4 4 0 114-4A4.0045 4.0045 0 0122 28zM25 10H4A2.0021 2.0021 0 012 8V4A2.0021 2.0021 0 014 2H25a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 0125 10zM4 4V8H25V4zM12 28H4V24h8V22H4a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2h8z" /><path d="M28,12H7a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h5V18H7V14H28l.0007,2H30V14A2.0023,2.0023,0,0,0,28,12Z" /></svg>`;
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
