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

export const ICON_NAME = `${ICON_PREFIX}icon-sun`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z" transform="translate(0 .005)" /><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.86 7.856)" /><path d="M2 15.005H7V17.005000000000003H2z" /><path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.86 24.149)" /><path d="M15 25.005H17V30.005H15z" /><path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.152 24.149)" /><path d="M25 15.005H30V17.005000000000003H25z" /><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.152 7.856)" /><path d="M15 2.005H17V7.005H15z" /></svg>`;
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
