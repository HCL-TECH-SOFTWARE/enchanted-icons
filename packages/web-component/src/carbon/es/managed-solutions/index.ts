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

export const ICON_NAME = `${ICON_PREFIX}icon-managed-solutions`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30 23L25 23 25 18 23 18 23 23 18 23 18 25 23 25 23 30 25 30 25 25 30 25 30 23z" /><path d="M24.1273,11.8394l1.1807.2136a5.7919,5.7919,0,0,1,2.6247,1.1445A5.4219,5.4219,0,0,1,29.9532,18h2.0293a7.5022,7.5022,0,0,0-6.15-7.8848,10.0067,10.0067,0,0,0-7.9387-7.9336,10.0025,10.0025,0,0,0-11.72,7.9336A7.5055,7.5055,0,0,0,.0576,18.4088,7.6841,7.6841,0,0,0,7.7725,25H14V23H7.6978a5.6323,5.6323,0,0,1-5.6024-4.4859,5.5064,5.5064,0,0,1,4.4338-6.4306l1.3488-.2441.2138-1.11a8.2061,8.2061,0,0,1,6.7427-6.6426,7.9714,7.9714,0,0,1,3.0138.13,8.1442,8.1442,0,0,1,6.0526,6.4464Z" /></svg>`;
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
