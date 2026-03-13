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

export const ICON_NAME = `${ICON_PREFIX}icon-slisor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z" /><circle cx="7" cy="25" r="1" /><path d="M16,22a1.0005,1.0005,0,0,1-.4473-.1055l-10-5,.8946-1.789L16,19.8821l9.5527-4.7766.8946,1.789-10,5A1.0005,1.0005,0,0,1,16,22Z" /><path d="M16,16a1.0005,1.0005,0,0,1-.4473-.1055l-10-5a1,1,0,0,1,0-1.789l10-5a1.0008,1.0008,0,0,1,.8946,0l10,5a1,1,0,0,1,0,1.789l-10,5A1.0005,1.0005,0,0,1,16,16ZM8.2358,10,16,13.8821,23.7642,10,16,6.1179Z" /></svg>`;
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
