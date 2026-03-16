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

export const ICON_NAME = `${ICON_PREFIX}icon-stamp`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,18H20V14.8982a7.4938,7.4938,0,0,1,1.1587-3.8542,5.9751,5.9751,0,0,0-1.3735-7.7006,5.9968,5.9968,0,0,0-9.6829,3.54,5.91,5.91,0,0,0,.7478,4.175A7.2573,7.2573,0,0,1,12,14.7942V18H6a2.002,2.002,0,0,0-2,2v4a2.0025,2.0025,0,0,0,2,2v2a2.0025,2.0025,0,0,0,2,2H24a2.0025,2.0025,0,0,0,2-2V26a2.0025,2.0025,0,0,0,2-2V20A2.002,2.002,0,0,0,26,18ZM12.07,7.244a3.9994,3.9994,0,1,1,7.3728,2.7731A9.76,9.76,0,0,0,18.0664,14H13.94a9.5433,9.5433,0,0,0-1.376-3.9736A3.9366,3.9366,0,0,1,12.07,7.244ZM18,16v2H14V16Zm6,12H8V26H24ZM6,24V20H26v4Z" /></svg>`;
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
