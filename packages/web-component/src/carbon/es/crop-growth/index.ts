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

export const ICON_NAME = `${ICON_PREFIX}icon-crop-growth`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,13a4.0045,4.0045,0,0,0,4-4V6H27a3.979,3.979,0,0,0-2.7468,1.1064A6.0041,6.0041,0,0,0,19,4H16V7a6.0066,6.0066,0,0,0,6,6h1V26H11V21h1a4.0045,4.0045,0,0,0,4-4V14H13a3.979,3.979,0,0,0-2.7468,1.1064A6.0041,6.0041,0,0,0,5,12H2v3a6.0066,6.0066,0,0,0,6,6H9v5H2v2H30V26H25V13Zm-1-3a2.002,2.002,0,0,1,2-2h1V9a2.002,2.002,0,0,1-2,2H25ZM11,18a2.002,2.002,0,0,1,2-2h1v1a2.002,2.002,0,0,1-2,2H11ZM9,19H8a4.0045,4.0045,0,0,1-4-4V14H5a4.0045,4.0045,0,0,1,4,4Zm14-8H22a4.0045,4.0045,0,0,1-4-4V6h1a4.0045,4.0045,0,0,1,4,4Z" /></svg>`;
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
