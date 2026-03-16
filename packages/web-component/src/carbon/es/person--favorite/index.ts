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

export const ICON_NAME = `${ICON_PREFIX}icon-person-favorite`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10 31H6a2.0059 2.0059 0 01-2-2V22a2.0059 2.0059 0 01-2-2V14a2.9465 2.9465 0 013-3h6a2.9465 2.9465 0 013 3v6a2.0059 2.0059 0 01-2 2v7A2.0059 2.0059 0 0110 31zM5 13a.9448.9448 0 00-1 1v6H6v9h4V20h2V14a.9448.9448 0 00-1-1zM8 10a4 4 0 114-4A4.0045 4.0045 0 018 10zM8 4a2 2 0 102 2A2.002 2.002 0 008 4zM28.7663 4.2558A4.2121 4.2121 0 0023 4.0321a4.2121 4.2121 0 00-5.7663.2237 4.319 4.319 0 000 6.0447L22.998 16.14 23 16.1376l.002.0019 5.7643-5.839A4.319 4.319 0 0028.7663 4.2558zM27.342 8.8948l-4.34 4.3973L23 13.29l-.002.002-4.34-4.3973a2.3085 2.3085 0 010-3.2338 2.2639 2.2639 0 013.1561 0l1.181 1.2074L23 6.8634l.0049.005 1.181-1.2074a2.2639 2.2639 0 013.1561 0A2.3085 2.3085 0 0127.342 8.8948z" /></svg>`;
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
