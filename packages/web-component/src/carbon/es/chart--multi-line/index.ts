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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-multi-line`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4.5859,28l7.1783-5.998L19.7578,23.94a2.021,2.021,0,0,0,1.314-.1206L28,20.5811l-.8479-1.8121-6.9163,3.229L12.2422,20.06a2.0033,2.0033,0,0,0-1.74.3838L4,25.8818V20.49l7.7642-6.4877L19.7578,15.94a2.021,2.021,0,0,0,1.314-.1206l6.9287-3.2383-.8467-1.812-6.918,3.2285L12.2422,12.06a2.0049,2.0049,0,0,0-1.74.3838L4,17.8818V12.49L11.7642,6.002,19.7578,7.94a2.021,2.021,0,0,0,1.314-.1206L28,4.5859l-.8457-1.8115L20.2358,5.998,12.2422,4.06a2.0033,2.0033,0,0,0-1.74.3838L4,9.8818V2H2V28a2,2,0,0,0,2,2H30V28Z" /></svg>`;
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
