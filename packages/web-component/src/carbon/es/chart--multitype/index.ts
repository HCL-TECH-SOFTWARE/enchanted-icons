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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-multitype`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 22H30V30H28zM24 18H26V30H24zM20 26H22V30H20zM9 16a7 7 0 107 7A7.0078 7.0078 0 009 16zm4.8989 6H10V18.1011A5.0145 5.0145 0 0113.8989 22zM9 28a5 5 0 01-1-9.8989V22a2 2 0 002 2h3.8989A5.0081 5.0081 0 019 28zM22.5352 12l4-6H30V4H25.4648l-4 6H18V2H16V14a2 2 0 002 2H30V14H18V12z" /><circle cx="11" cy="7" r="1" /><circle cx="9" cy="11" r="1" /><circle cx="7" cy="5" r="1" /><circle cx="5" cy="9" r="1" /><circle cx="3" cy="13" r="1" /></svg>`;
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
