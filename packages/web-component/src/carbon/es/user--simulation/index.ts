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

export const ICON_NAME = `${ICON_PREFIX}icon-user-simulation`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25.232 12.866H29.232V14.866H25.232z" transform="rotate(30 27.232 13.866)" /><path d="M26 8H30V10H26z" /><path d="M2.768 12.866H6.768V14.866H2.768z" transform="rotate(150 4.768 13.866)" /><path d="M26 30H24V25a5.0059 5.0059 0 00-5-5H13a5.0059 5.0059 0 00-5 5v5H6V25a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2z" /><path d="M25.232 3.134H29.232V5.134H25.232z" transform="rotate(-30 27.232 4.134)" /><path d="M2 8H6V10H2z" /><path d="M2.768 3.134H6.768V5.134H2.768z" transform="rotate(-150 4.768 4.134)" /></svg>`;
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
