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

export const ICON_NAME = `${ICON_PREFIX}icon-flash-off`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M11.13 6.89L11.8 4h8l-2 9H23l-2.49 3.25 1.43 1.43 3.87-5.07a1 1 0 00.11-1A1 1 0 0025 11H20.25L22 3.22a1 1 0 00-.2-.85A1 1 0 0021 2H11a1 1 0 00-1 .77L9.46 5.22zM30 28.59l-9.31-9.31h0l-1.42-1.43h0L10.6 9.19h0L8.93 7.52h0L3.41 2 2 3.41 8.4 9.82 7 15.77A1 1 0 008 17h4.83L11 28.85a1 1 0 00.6 1.07A1.09 1.09 0 0012 30a1 1 0 00.79-.39l6.68-8.73L28.59 30zM9.26 15l.81-3.52L13.59 15zm4.32 10.28L15 16.37 18 19.45z" /></svg>`;
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
