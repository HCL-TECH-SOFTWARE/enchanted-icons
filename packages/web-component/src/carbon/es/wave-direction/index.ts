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

export const ICON_NAME = `${ICON_PREFIX}icon-wave-direction`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,30H17a7.0078,7.0078,0,0,1-7-7,6.6832,6.6832,0,0,1,2.0244-4.6967A6.7126,6.7126,0,0,0,10.0093,18C5.0425,18.0466,4,24.5513,4,30H2C2,18.4907,6.3452,16.0342,9.9907,16a10.0962,10.0962,0,0,1,4.4785,1.117,1,1,0,0,1,.0616,1.73A4.8773,4.8773,0,0,0,17,28h5Z" /><path d="M18,24V22a8,8,0,1,0-8-8H8A10,10,0,1,1,18,24Z" /><circle cx="18" cy="8" r="1" /><path d="M23,17.5859l-2.3-2.3007A2.9665,2.9665,0,0,0,21,14a3.0033,3.0033,0,0,0-3-3,2.9609,2.9609,0,0,0-1.2854.3008L14.4141,9,13,10.4141l2.3,2.3007A2.9665,2.9665,0,0,0,15,14a3.0033,3.0033,0,0,0,3,3,2.9609,2.9609,0,0,0,1.2854-.3008L21.5859,19ZM17,14a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,17,14Z" /></svg>`;
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
