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

export const ICON_NAME = `${ICON_PREFIX}icon-brightness-contrast`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M15 2H17V5H15zM27 15H30V17H27zM15 27H17V30H15zM2 15H5V17H2z" /><path d="M6.22 5.73H8.219999999999999V8.73H6.22z" transform="rotate(-45 7.227 7.236)" /><path d="M23.27 6.23H26.27V8.23H23.27z" transform="rotate(-45 24.766 7.232)" /><path d="M23.77 23.27H25.77V26.27H23.77z" transform="rotate(-45 24.77 24.77)" /><path d="M5.47 25.13L7.59 23 9 24.42 6.88 26.54 5.47 25.13zM16 8a8 8 0 108 8A8 8 0 0016 8zm0 14a6 6 0 010-12z" /></svg>`;
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
