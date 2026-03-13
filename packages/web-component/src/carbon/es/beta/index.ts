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

export const ICON_NAME = `${ICON_PREFIX}icon-beta`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20.7168,13.7705A5.9174,5.9174,0,0,0,23,9c0-3.5327-2.8784-6-7-6a6.627,6.627,0,0,0-7,7V31h2V25.1206a8.1261,8.1261,0,0,0,6,2.48A7.3833,7.3833,0,0,0,24.6528,20,6.6364,6.6364,0,0,0,20.7168,13.7705ZM17,25.6A5.6781,5.6781,0,0,1,11,20V10a4.6856,4.6856,0,0,1,5-5c3.0374,0,5,1.57,5,4a3.8732,3.8732,0,0,1-4,4v2c3.4341,0,5.6528,1.9629,5.6528,5A5.3907,5.3907,0,0,1,17,25.6Z" /></svg>`;
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
