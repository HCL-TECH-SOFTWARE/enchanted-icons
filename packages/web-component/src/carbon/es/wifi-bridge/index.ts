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

export const ICON_NAME = `${ICON_PREFIX}icon-wifi-bridge`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M6.9492,20.95l-1.414-1.4141a5,5,0,0,0,0-7.0715L6.9492,11.05a7,7,0,0,1,0,9.9Z" /><path d="M10.4854 24.4854L9.0713 23.0713a10.0011 10.0011 0 000-14.1426l1.4141-1.4141a12.0006 12.0006 0 010 16.9708zM25.0508 20.95a7 7 0 010-9.9l1.414 1.4146a5 5 0 000 7.0715z" /><path d="M21.5146 24.4854a12.0006 12.0006 0 010-16.9708l1.4141 1.4141a10.0011 10.0011 0 000 14.1426zM3 15H2V4H0V28H2V17H3a1 1 0 000-2zM30 4V15H29a1 1 0 000 2h1V28h2V4z" /></svg>`;
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
