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

export const ICON_NAME = `${ICON_PREFIX}icon-tennis-ball`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19,4a8.9812,8.9812,0,0,0-8.1687,12.7549L2,25.5859,3.4141,27l8.4873-8.4873a9.0408,9.0408,0,0,0,1.5859,1.5859L10,23.5859,11.4141,25l3.8313-3.8311A8.9959,8.9959,0,1,0,19,4Zm6.9058,7.9058a7.005,7.005,0,0,1-5.8116-5.8116A7.005,7.005,0,0,1,25.9058,11.9058ZM12.0942,14.0942a7.005,7.005,0,0,1,5.8116,5.8116A7.005,7.005,0,0,1,12.0942,14.0942ZM19.93,19.9307a9.01,9.01,0,0,0-7.8611-7.8614,7.004,7.004,0,0,1,6-6,9.01,9.01,0,0,0,7.8611,7.8614A7.004,7.004,0,0,1,19.93,19.9307Z" /></svg>`;
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
