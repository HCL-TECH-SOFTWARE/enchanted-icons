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

export const ICON_NAME = `${ICON_PREFIX}icon-road-weather`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16 31H14v-.228a3.0135 3.0135 0 00-1.9468-2.8091L8.5215 26.6384A3.9034 3.9034 0 016 23H8a1.8946 1.8946 0 001.2236 1.7659L12.7554 26.09A5.0226 5.0226 0 0116 30.772zM30 31H28v-.228a3.0135 3.0135 0 00-1.9468-2.8091l-3.5317-1.3245A3.9034 3.9034 0 0120 23h2a1.8946 1.8946 0 001.2236 1.7659L26.7554 26.09A5.0226 5.0226 0 0130 30.772zM11 13H17V15H11z" /><path d="M23.4409,8,22.1687,3.45A2.009,2.009,0,0,0,20.2456,2H7.7544A2.0089,2.0089,0,0,0,5.8313,3.4507L4.5315,8H2v2H4v7a2.0025,2.0025,0,0,0,2,2v2H8V19H20v2h2V19a2.0025,2.0025,0,0,0,2-2V10h2V8ZM7.7544,4H20.2458l1.4285,5H6.3257ZM22,13H20v2h2v2H6V15H8V13H6V11H22Z" /></svg>`;
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
