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

export const ICON_NAME = `${ICON_PREFIX}icon-quadrant-plot`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30 15L17 15 17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z" /><path d="M5 30a3 3 0 113-3A3.0033 3.0033 0 015 30zm0-4a1 1 0 101 1A1.001 1.001 0 005 26zM8 8a3 3 0 113-3A3.0033 3.0033 0 018 8zM8 4A1 1 0 109 5 1.001 1.001 0 008 4zM22 13a3 3 0 113-3A3.0033 3.0033 0 0122 13zm0-4a1 1 0 101 1A1.001 1.001 0 0022 9z" /><circle cx="11" cy="11" r="2" /><circle cx="11" cy="21" r="2" /><circle cx="21" cy="21" r="2" /><circle cx="22" cy="28" r="2" /><circle cx="28" cy="24" r="2" /><circle cx="4" cy="11" r="2" /><circle cx="28" cy="4" r="2" /></svg>`;
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
