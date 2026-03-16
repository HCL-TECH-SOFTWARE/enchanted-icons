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

export const ICON_NAME = `${ICON_PREFIX}icon-mixed-rain-hail`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="24.5" cy="25.5" r="1.5" /><circle cx="21.5" cy="29.5" r="1.5" /><path d="M15.868 30.496L14.132 29.504 17.276 24 11.277 24 16.132 15.504 17.868 16.496 14.723 22 20.724 22 15.868 30.496z" /><path d="M9 32a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7888.8947l-2 4A.9981.9981 0 019 32zM24.8008 9.1362a8.9943 8.9943 0 00-17.6006 0 6.4929 6.4929 0 00.23 12.7681L6.106 24.5527a1 1 0 101.7885.8946l2-4a1 1 0 00-.447-1.3418A.9786.9786 0 009 20.01V20H8.5a4.4975 4.4975 0 01-.356-8.981l.8155-.0639.0991-.812a6.9938 6.9938 0 0113.8838 0l.0986.812.8154.0639A4.4975 4.4975 0 0123.5 20H23v2h.5A6.4974 6.4974 0 0024.8008 9.1362z" /></svg>`;
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
