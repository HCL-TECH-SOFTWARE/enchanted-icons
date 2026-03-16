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

export const ICON_NAME = `${ICON_PREFIX}icon-gift`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,10H23.2383A4.4867,4.4867,0,0,0,16,4.7065,4.4873,4.4873,0,0,0,8.7617,10H6a2.0025,2.0025,0,0,0-2,2v4a2.0025,2.0025,0,0,0,2,2V28a2.0025,2.0025,0,0,0,2,2H24a2.0025,2.0025,0,0,0,2-2V18a2.0025,2.0025,0,0,0,2-2V12A2.0025,2.0025,0,0,0,26,10ZM17,7.5A2.5,2.5,0,1,1,19.5,10H17ZM12.5,5A2.503,2.503,0,0,1,15,7.5V10H12.5a2.5,2.5,0,0,1,0-5ZM6,12h9v4H6Zm2,6h7V28H8ZM24.0012,28H17V18h7ZM17,16V12h9l.0012,4Z" /></svg>`;
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
