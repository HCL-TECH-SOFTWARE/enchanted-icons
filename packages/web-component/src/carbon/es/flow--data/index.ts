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

export const ICON_NAME = `${ICON_PREFIX}icon-flow-data`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,23H11.86a4.17,4.17,0,0,0-.43-1L22,11.43A3.86,3.86,0,0,0,24,12a4,4,0,1,0-3.86-5H11.86a4,4,0,1,0,0,2h8.28a4.17,4.17,0,0,0,.43,1L10,20.57A3.86,3.86,0,0,0,8,20a4,4,0,1,0,3.86,5H20v3h8V20H20ZM8,10a2,2,0,1,1,2-2A2,2,0,0,1,8,10ZM24,6a2,2,0,1,1-2,2A2,2,0,0,1,24,6ZM8,26a2,2,0,1,1,2-2A2,2,0,0,1,8,26Zm14-4h4v4H22Z" /></svg>`;
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
