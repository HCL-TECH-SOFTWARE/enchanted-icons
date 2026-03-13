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

export const ICON_NAME = `${ICON_PREFIX}icon-edge-node-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,22a2.981,2.981,0,0,0-2.0374.811l-4.0039-2.4023a2.0429,2.0429,0,0,0,0-.8174l4.0039-2.4023A2.9909,2.9909,0,1,0,24,15a2.9345,2.9345,0,0,0,.0415.4092l-4.0039,2.4023a3,3,0,1,0,0,4.377l4.0039,2.4023A2.9345,2.9345,0,0,0,24,25a3,3,0,1,0,3-3Zm0-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,27,14Zm-9,7a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,18,21Zm9,5a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,26Z" /><circle cx="7" cy="8" r="1" /><circle cx="7" cy="16" r="1" /><circle cx="7" cy="24" r="1" /><path d="M22,13V5a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,5V27a2.0023,2.0023,0,0,0,2,2H20V27H4V21h8V19H4V13ZM4,5H20v6H4Z" /></svg>`;
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
