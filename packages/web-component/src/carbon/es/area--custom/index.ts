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

export const ICON_NAME = `${ICON_PREFIX}icon-area-custom`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,6a3.9916,3.9916,0,0,0-7.9773-.2241L9.5864,8.2627A3.99,3.99,0,1,0,5,13.8579v8.2842A3.9915,3.9915,0,1,0,9.8579,27h8.2842a3.9912,3.9912,0,1,0,5.595-4.5864l2.487-12.4361A3.9945,3.9945,0,0,0,30,6ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM4,10a2,2,0,1,1,2,2A2.0023,2.0023,0,0,1,4,10ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Zm12.1421-3H9.8579A3.9942,3.9942,0,0,0,7,22.1421V13.8579a3.9871,3.9871,0,0,0,2.9773-3.6338L22.4136,7.7373a4.0053,4.0053,0,0,0,1.8493,1.8491l-2.487,12.4361A3.9874,3.9874,0,0,0,18.1421,25ZM22,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,22,28Z" /></svg>`;
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
