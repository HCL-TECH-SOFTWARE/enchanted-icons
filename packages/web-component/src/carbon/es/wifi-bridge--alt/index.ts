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

export const ICON_NAME = `${ICON_PREFIX}icon-wifi-bridge-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M13,26H11a5.0057,5.0057,0,0,0-5-5V19A7.0078,7.0078,0,0,1,13,26Z" /><path d="M18 26H16A10.0113 10.0113 0 006 16V14A12.0137 12.0137 0 0118 26zM26 13a7.0078 7.0078 0 01-7-7h2a5.0057 5.0057 0 005 5z" /><path d="M26 18A12.0137 12.0137 0 0114 6h2A10.0113 10.0113 0 0026 16zM7.707 24.293a.9994.9994 0 00-1.414 0L2 28.5859 3.4143 30 7.707 25.707A.9994.9994 0 007.707 24.293zM28.5859 2L24.293 6.293a1 1 0 001.414 1.414L30 3.4141z" /></svg>`;
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
