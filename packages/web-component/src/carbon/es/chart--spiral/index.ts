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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-spiral`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2A13.919,13.919,0,0,0,7.3245,5.0327,1.9728,1.9728,0,0,0,7,5,2,2,0,0,0,5,7a1.9752,1.9752,0,0,0,.0327.3247A13.986,13.986,0,1,0,16,2Zm0,26A11.977,11.977,0,0,1,6.3589,8.8857a1.8311,1.8311,0,0,0,1.1528.04l1.4634,1.4634a8.9862,8.9862,0,0,0,11.8311,13.207,1.9916,1.9916,0,0,0,2.79-2.79,8.9294,8.9294,0,0,0,0-9.6124,1.9916,1.9916,0,0,0-2.79-2.79,8.9445,8.9445,0,0,0-10.417.5713L8.9258,7.5117a1.8294,1.8294,0,0,0-.04-1.1528A11.9925,11.9925,0,1,1,16,28Zm0-14a2,2,0,1,1-2,2A2.0025,2.0025,0,0,1,16,14Zm3.4331-.019,2.0552-2.0552a2.0443,2.0443,0,0,0,.2265.0454,6.9573,6.9573,0,0,1,0,8.0576,2.0443,2.0443,0,0,0-.2265.0454L19.4331,18.019a3.8788,3.8788,0,0,0,0-4.038Zm.5957-3.6958a1.9993,1.9993,0,0,0,.0454.2265L18.019,12.5669a3.8788,3.8788,0,0,0-4.038,0l-2.1653-2.1655a6.9522,6.9522,0,0,1,8.2131-.1162ZM12.5669,13.981A3.951,3.951,0,0,0,12,16a4.0045,4.0045,0,0,0,4,4,3.9521,3.9521,0,0,0,2.019-.5669l2.0552,2.0552a1.9993,1.9993,0,0,0-.0454.2265,6.988,6.988,0,0,1-9.6272-9.8994Z" /></svg>`;
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
