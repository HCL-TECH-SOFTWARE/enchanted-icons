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

export const ICON_NAME = `${ICON_PREFIX}icon-circle-packing`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm7.5,7A3.5,3.5,0,1,1,20,12.5,3.5041,3.5041,0,0,1,23.5,9Zm.4348-1.978C23.791,7.0107,23.6467,7,23.5,7a5.4826,5.4826,0,0,0-4.1323,1.8784,8.0109,8.0109,0,0,0-5.5664-4.6675A11.8554,11.8554,0,0,1,23.9348,7.022ZM16,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,28ZM12,18a6,6,0,1,1,6-6A6.0067,6.0067,0,0,1,12,18ZM4,16a11.97,11.97,0,0,1,.2112-2.1987,7.9921,7.9921,0,0,0,7.3459,6.1762,5.9581,5.9581,0,0,0-.89,6.7564A12.0025,12.0025,0,0,1,4,16ZM21.3325,26.7339a5.9834,5.9834,0,0,0-4.1782-8.6206,8.02,8.02,0,0,0,1.9126-2.3672,5.4883,5.4883,0,0,0,8.9167-.0679c.003.1079.0164.2134.0164.3218A12.0025,12.0025,0,0,1,21.3325,26.7339Z" /></svg>`;
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
