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

export const ICON_NAME = `${ICON_PREFIX}icon-license-maintenance`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8 14H14V16H8zM8 6H20V8H8zM8 10H20V12H8zM8 24H14V26H8zM30 24V22H27.8989a4.9678 4.9678 0 00-.7319-1.7529l1.49-1.49-1.414-1.414-1.49 1.49A4.9678 4.9678 0 0024 18.1011V16H22v2.1011a4.9678 4.9678 0 00-1.7529.7319l-1.49-1.49-1.414 1.414 1.49 1.49A4.9678 4.9678 0 0018.1011 22H16v2h2.1011a4.9678 4.9678 0 00.7319 1.7529l-1.49 1.49 1.414 1.414 1.49-1.49A4.9678 4.9678 0 0022 27.8989V30h2V27.8989a4.9678 4.9678 0 001.7529-.7319l1.49 1.49 1.414-1.414-1.49-1.49A4.9678 4.9678 0 0027.8989 24zm-7 2a3 3 0 113-3A3.0033 3.0033 0 0123 26z" /><path d="M14,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h8Z" /></svg>`;
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
