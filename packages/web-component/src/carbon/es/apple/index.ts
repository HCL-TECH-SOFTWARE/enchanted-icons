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

export const ICON_NAME = `${ICON_PREFIX}icon-apple`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21.7788,8a11.4843,11.4843,0,0,0-3.0547.5342,14.5665,14.5665,0,0,1-1.8225.4126A6.0054,6.0054,0,0,0,11,4V6a3.9933,3.9933,0,0,1,3.8267,2.9c-.5181-.0879-1.0569-.2207-1.6172-.3648A12.89,12.89,0,0,0,10.0317,8C6.311,8,4,11.0652,4,16c0,7.51,4.0679,11.999,8.0005,12h.0015a7.1576,7.1576,0,0,0,2.49-.59A5.0128,5.0128,0,0,1,16,27a5.0266,5.0266,0,0,1,1.5112.41A7.15,7.15,0,0,0,20,28h0c3.9307-.001,8-4.49,8-12C28,12.3094,26.3706,8,21.7788,8ZM20,26h0a5.5038,5.5038,0,0,1-1.7905-.4639A6.4168,6.4168,0,0,0,16,25a6.4043,6.4043,0,0,0-2.2061.5361A5.5343,5.5343,0,0,1,12,26h.0015C9.0513,25.9988,6,22.2586,6,16c0-1.8037.3931-6,4.0317-6a11.2363,11.2363,0,0,1,2.6807.4726A12.9819,12.9819,0,0,0,15.7612,11h.4922a11.7955,11.7955,0,0,0,2.9956-.5361A9.8483,9.8483,0,0,1,21.7788,10C25.7964,10,26,14.9978,26,16,26,22.2586,22.9482,25.9988,20,26Z" /><path d="M18,7H17V6a2.0021,2.0021,0,0,1,2-2h1V5A2.0021,2.0021,0,0,1,18,7Z" /></svg>`;
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
