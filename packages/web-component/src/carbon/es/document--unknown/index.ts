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

export const ICON_NAME = `${ICON_PREFIX}icon-document-unknown`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="9" cy="28.5" r="1.5" /><path d="M10,25H8V21h2a2,2,0,0,0,0-4H8a2.0023,2.0023,0,0,0-2,2v.5H4V19a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z" /><path d="M27.7,9.3l-7-7A.9085.9085,0,0,0,20,2H10A2.0058,2.0058,0,0,0,8,4v8h2V4h8v6a2.0058,2.0058,0,0,0,2,2h6V28H14v2H26a2.0058,2.0058,0,0,0,2-2V10A.9092.9092,0,0,0,27.7,9.3ZM20,10V4.4L25.6,10Z" /></svg>`;
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
