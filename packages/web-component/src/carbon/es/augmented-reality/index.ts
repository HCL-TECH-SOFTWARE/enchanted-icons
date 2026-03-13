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

export const ICON_NAME = `${ICON_PREFIX}icon-augmented-reality`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.4473,9.1055l-6-3a1.0008,1.0008,0,0,0-.8946,0l-6,3A1,1,0,0,0,14,10v7a1,1,0,0,0,.5527.8945l6,3a1.001,1.001,0,0,0,.8946,0l6-3A1,1,0,0,0,28,17V10A1,1,0,0,0,27.4473,9.1055ZM21,8.1182,24.7637,10,21,11.8818,17.2363,10Zm-5,3.5,4,2v4.7636l-4-2Zm6,6.7636V13.6182l4-2v4.7636Z" /><circle cx="13.5" cy="24.5" r="1.5" /><path d="M20,30H7a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,7,2H20V4H7V28H20V24h2v4A2.0023,2.0023,0,0,1,20,30Z" /></svg>`;
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
