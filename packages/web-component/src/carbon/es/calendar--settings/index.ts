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

export const ICON_NAME = `${ICON_PREFIX}icon-calendar-settings`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,23V21H27.91a5.9592,5.9592,0,0,0-1.0244-2.4707L28.364,17.05,26.95,15.6362l-1.4788,1.4785A5.9584,5.9584,0,0,0,23,16.09V14H21v2.09a5.9584,5.9584,0,0,0-2.4709,1.0244L17.05,15.6362,15.636,17.05l1.4787,1.479A5.9618,5.9618,0,0,0,16.09,21H14v2h2.09a5.9618,5.9618,0,0,0,1.0244,2.4707L15.636,26.95,17.05,28.3638l1.4788-1.4785A5.9584,5.9584,0,0,0,21,27.91V30h2V27.91a5.9584,5.9584,0,0,0,2.4709-1.0244L26.95,28.3638,28.364,26.95l-1.4787-1.479A5.9592,5.9592,0,0,0,27.91,23Zm-8,3a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,26Z" /><path d="M28,6a2,2,0,0,0-2-2H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V6h4V8h2V6h8V8h2V6h4v6h2Z" /></svg>`;
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
