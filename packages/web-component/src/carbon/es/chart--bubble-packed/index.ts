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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-bubble-packed`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.5322,17.1724A8.99,8.99,0,1,0,13.6074,5.88,5.9969,5.9969,0,1,0,5.051,13.2217a6.9967,6.9967,0,1,0,7.9942,11.4844A5.9981,5.9981,0,0,0,25,24c0-.1216-.011-.24-.0181-.3594a3.4873,3.4873,0,1,0,2.55-6.4682ZM21,4a7,7,0,1,1-7,7A7.0078,7.0078,0,0,1,21,4ZM8,4A4,4,0,1,1,4,8,4.0045,4.0045,0,0,1,8,4ZM19,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,19,28Z" /></svg>`;
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
