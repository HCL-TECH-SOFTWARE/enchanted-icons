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

export const ICON_NAME = `${ICON_PREFIX}icon-network-4-reference`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="21" cy="26" r="2" /><path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z" /><circle cx="21" cy="6" r="2" /><circle cx="4" cy="16" r="2" /><path d="M28,12a3.9962,3.9962,0,0,0-3.8579,3H19.8579a3.9655,3.9655,0,0,0-5.4914-2.6426L11.19,8.3872A3.9624,3.9624,0,0,0,12,6a4,4,0,1,0-4,4,3.96,3.96,0,0,0,1.6338-.3574l3.176,3.97A3.9613,3.9613,0,0,0,12,16a3.9915,3.9915,0,0,0,7.8579,1h4.2842A3.9934,3.9934,0,1,0,28,12ZM8,8a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,8,8Zm8,10a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,16,18Zm12,0a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,28,18Z" /></svg>`;
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
