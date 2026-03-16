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

export const ICON_NAME = `${ICON_PREFIX}icon-touch-interaction`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,21V20a1,1,0,0,1,2,0V30h2V20a3.0033,3.0033,0,0,0-3-3,2.964,2.964,0,0,0-1.4708.4014,2.9541,2.9541,0,0,0-4-1A2.9934,2.9934,0,0,0,19,15a2.96,2.96,0,0,0-1,.1846L18,10h0a3,3,0,0,0-6,0V21.1045L9.7651,19.5752l-.0008.001a2.999,2.999,0,0,0-3.881,4.55L12.3223,30l1.3479-1.478L7.2915,22.7036A.9908.9908,0,0,1,7,22a1.0005,1.0005,0,0,1,1.6-.8008L14,24.8955V10a1,1,0,0,1,2,0h0V21h2V18a1,1,0,0,1,2,0v3h2V19a1,1,0,0,1,2,0v2Z" /><path d="M28,12H22V10h6V4H4v6H8v2H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2v6A2.0021,2.0021,0,0,1,28,12Z" /></svg>`;
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
