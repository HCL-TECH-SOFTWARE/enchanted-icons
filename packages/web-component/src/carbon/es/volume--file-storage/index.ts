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

export const ICON_NAME = `${ICON_PREFIX}icon-volume-file-storage`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25.707,17.293l-5-5A1,1,0,0,0,20,12H14a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V18A1,1,0,0,0,25.707,17.293ZM23.5857,18H20V14.4141ZM14,28V14h4v4a2,2,0,0,0,2,2h4v8Z" /><path d="M8,27H4a2.0023,2.0023,0,0,1-2-2V5A2.0023,2.0023,0,0,1,4,3h7.5857A1.9865,1.9865,0,0,1,13,3.5859L16.4143,7H28a2.0023,2.0023,0,0,1,2,2v8H28V9H15.5857l-4-4H4V25H8Z" /></svg>`;
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
