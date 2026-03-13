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

export const ICON_NAME = `${ICON_PREFIX}icon-skip-back-outline-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM10,22H8V10h2Zm14-1a1,1,0,0,1-1.4858.874l-9-5a1,1,0,0,1,0-1.748l9-5A1,1,0,0,1,24,11Z" /><path d="M22 19.301L22 12.699 16.059 16 22 19.301z" /><path fill="none" d="M23,22a1.0037,1.0037,0,0,1-.4858-.1257l-9-5a1,1,0,0,1,0-1.7486l9-5A1,1,0,0,1,24,11V21a1,1,0,0,1-1,1Zm-6.9409-6L22,19.3005V12.7Z" /><path fill="none" d="M8 10H10V22H8z" transform="rotate(-180 9 16)" /></svg>`;
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
