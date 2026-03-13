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

export const ICON_NAME = `${ICON_PREFIX}icon-haze`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19 28H3a1 1 0 010-2H19a1 1 0 010 2zM15 20H3a1 1 0 010-2H15a1 1 0 010 2z" /><path d="M24.5 23.5H28.5V25.5H24.5z" transform="rotate(45 26.5 24.5)" /><path d="M28 15H32V17H28z" /><path d="M24.5 6.5H28.5V8.5H24.5z" transform="rotate(-45 26.5 7.5)" /><path d="M17 2H19V6H17z" /><path d="M7.5 6.5H11.5V8.5H7.5z" transform="rotate(-135 9.5 7.5)" /><path d="M18,8a8.0092,8.0092,0,0,0-8,8h2a6,6,0,1,1,6,6H7a1,1,0,0,0,0,2H18A8,8,0,0,0,18,8Z" /></svg>`;
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
