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

export const ICON_NAME = `${ICON_PREFIX}icon-noodle-bowl`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M11.4141,15l-8-8L2,8.4141,8.5859,15H2v1a14,14,0,0,0,28,0V15ZM16,28A12.0166,12.0166,0,0,1,4.0415,17h23.917A12.0166,12.0166,0,0,1,16,28Z" /><path d="M22,8a5.0049,5.0049,0,0,0-1.5708.2554A8.0242,8.0242,0,0,0,14,5,7.9364,7.9364,0,0,0,9.0938,6.68L4.4141,2,3,3.4141,9.05,9.4648l.707-.7075A5.96,5.96,0,0,1,14,7a6.02,6.02,0,0,1,4.6875,2.2642,5.06,5.06,0,0,0-.59.61A2.9892,2.9892,0,0,1,15.7544,11H12v2h3.7544a4.98,4.98,0,0,0,3.9033-1.8745A3,3,0,0,1,25,13h2A5.0059,5.0059,0,0,0,22,8Z" /></svg>`;
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
