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

export const ICON_NAME = `${ICON_PREFIX}icon-phone-ip`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16 14H18V16H16zM20 14H22V16H20zM24 14H26V16H24zM16 18H18V20H16zM20 18H22V20H20zM24 18H26V20H24zM16 22H18V24H16zM20 22H22V24H20zM24 22H26V24H24zM16 10H26V12H16z" /><path d="M28,6H14V5a2.0025,2.0025,0,0,0-2-2H8A2.0025,2.0025,0,0,0,6,5V6H4A2.0025,2.0025,0,0,0,2,8V26a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V8A2.0025,2.0025,0,0,0,28,6ZM8,5h4V22H8ZM28,26H4V8H6V22a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V8H28Z" /></svg>`;
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
