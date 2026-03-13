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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-rose`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,17A15.017,15.017,0,0,0,15,2H14V8.0591A9.0122,9.0122,0,0,0,6.0591,16H4v1A11.0109,11.0109,0,0,0,14,27.9492V30h1A13.0084,13.0084,0,0,0,27.9492,18H30ZM16,4.0381A13.0217,13.0217,0,0,1,27.9619,16H16ZM14,10.08V16H8.08A7.0037,7.0037,0,0,1,14,10.08ZM6.0552,18H14v7.939A9.0134,9.0134,0,0,1,6.0552,18ZM16,27.9551V18h9.9551A11.0191,11.0191,0,0,1,16,27.9551Z" /></svg>`;
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
