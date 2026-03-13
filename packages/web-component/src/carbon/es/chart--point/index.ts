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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-point`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,30H4a2.0023,2.0023,0,0,1-2-2V2H4V28H30Z" /><circle cx="9" cy="6" r="3" /><circle cx="9" cy="22" r="3" /><circle cx="18" cy="14" r="3" /><path d="M9,17a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,9,17Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,9,13Z" /><circle cx="27" cy="6" r="3" /><circle cx="27" cy="22" r="3" /><path d="M27 17a3 3 0 113-3A3.0033 3.0033 0 0127 17zm0-4a1 1 0 101 1A1.001 1.001 0 0027 13zM18 26a3 3 0 113-3A3.0033 3.0033 0 0118 26zm0-4a1 1 0 101 1A1.001 1.001 0 0018 22zM18 8a3 3 0 113-3A3.0033 3.0033 0 0118 8zm0-4a1 1 0 101 1A1.001 1.001 0 0018 4z" /></svg>`;
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
