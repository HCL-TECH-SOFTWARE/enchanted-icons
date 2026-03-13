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

export const ICON_NAME = `${ICON_PREFIX}icon-text-creation`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,22.14V9.86A4,4,0,1,0,22.14,5H9.86A4,4,0,1,0,5,9.86V22.14A4,4,0,1,0,9.86,27H22.14A4,4,0,1,0,27,22.14ZM26,4a2,2,0,1,1-2,2A2,2,0,0,1,26,4ZM4,6A2,2,0,1,1,6,8,2,2,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2,2,0,0,1,6,28Zm16.14-3H9.86A4,4,0,0,0,7,22.14V9.86A4,4,0,0,0,9.86,7H22.14A4,4,0,0,0,25,9.86V22.14A4,4,0,0,0,22.14,25ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z" /><path d="M21 11L11 11 11 13 15 13 15 22 17 22 17 13 21 13 21 11z" /></svg>`;
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
