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

export const ICON_NAME = `${ICON_PREFIX}icon-connection-signal-off`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,13a8.9089,8.9089,0,0,1-2.5249,6.2339l1.4133,1.4131A10.9795,10.9795,0,0,0,23.6006,4.2l-1.2012,1.6A8.932,8.932,0,0,1,26,13Z" /><path d="M21 13a5.0022 5.0022 0 01-.9023 2.8564l1.4277 1.4278a6.9831 6.9831 0 00-.8584-9.5015l-1.334 1.49A5.0077 5.0077 0 0121 13zM30 28.5859L3.4143 2 2 3.4141l3.71 3.71A10.9824 10.9824 0 008.3994 21.8008l1.2012-1.6A8.9678 8.9678 0 017.1714 8.5854l2.1963 2.1963a6.9664 6.9664 0 001.9648 7.4351l1.334-1.49A5.0072 5.0072 0 0111 13a4.8854 4.8854 0 01.0393-.5464L15 16.4141V30h2V18.4141L28.5857 30z" /></svg>`;
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
