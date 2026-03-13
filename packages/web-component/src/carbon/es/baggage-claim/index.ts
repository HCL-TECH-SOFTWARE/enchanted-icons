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

export const ICON_NAME = `${ICON_PREFIX}icon-baggage-claim`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="6" cy="26" r="2" /><path d="M28,18H25V16a2.0023,2.0023,0,0,0-2-2H19a2.0023,2.0023,0,0,0-2,2v2H14a2.0023,2.0023,0,0,0-2,2v8a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V20A2.0023,2.0023,0,0,0,28,18Zm-9-2h4v2H19Zm9,12H14V20H28Z" /><path d="M10,6h4v6h2V6h4v6h2V6h4v6h2V6.0049A2.0047,2.0047,0,0,0,25.9951,4H4.0049A2.0047,2.0047,0,0,0,2,6.0049v13.99A2.0047,2.0047,0,0,0,4.0049,22H10ZM8,20H4V6H8Z" /></svg>`;
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
