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

export const ICON_NAME = `${ICON_PREFIX}icon-satellite`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22.9141,16.5l2.7929-2.793a.9994.9994,0,0,0,0-1.414L23.4141,10,25.5,7.9141,28.5859,11,30,9.5859,22.4141,2,21,3.4141,24.0859,6.5,22,8.5859,19.707,6.293a.9994.9994,0,0,0-1.414,0L15.5,9.0859,8.707,2.293a.9994.9994,0,0,0-1.414,0l-5,5a.9994.9994,0,0,0,0,1.414L9.0859,15.5,6.293,18.293a.9994.9994,0,0,0,0,1.414L8.5859,22,6.5,24.0859,3.4141,21,2,22.4141,9.5859,30,11,28.5859,7.9141,25.5,10,23.4141l2.293,2.2929a.9995.9995,0,0,0,1.414,0L16.5,22.9141l6.793,6.7929a.9995.9995,0,0,0,1.414,0l5-5a.9994.9994,0,0,0,0-1.414ZM4.4141,8,8,4.4141,10.0859,6.5,6.5,10.0859Zm3.5,3.5L11.5,7.9141,14.0859,10.5,10.5,14.0859ZM13,23.5859,8.4141,19,19,8.4141,23.5859,13ZM17.9141,21.5,21.5,17.9141,24.0859,20.5,20.5,24.0859ZM24,27.5859,21.9141,25.5,25.5,21.9141,27.5859,24Z" /></svg>`;
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
