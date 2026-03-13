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

export const ICON_NAME = `${ICON_PREFIX}icon-sunset`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 27.005H29.998V29.005H2z" /><path d="M16,20a4.0045,4.0045,0,0,1,4,4h2a6,6,0,0,0-12,0h2A4.0045,4.0045,0,0,1,16,20Z" transform="translate(0 .005)" /><path d="M25 22.005H30V24.005H25z" /><path d="M21.668 14.854H26.625999999999998V16.854H21.668z" transform="rotate(-45 24.152 15.856)" /><path d="M19.59 9.595L17 12.175 17 4.005 15 4.005 15 12.175 12.41 9.595 11 11.005 16 16.005 21 11.005 19.59 9.595z" /><path d="M6.854 13.374H8.854V18.332H6.854z" transform="rotate(-45 7.86 15.856)" /><path d="M2 22.005H7V24.005H2z" /></svg>`;
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
