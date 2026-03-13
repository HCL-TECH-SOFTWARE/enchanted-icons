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

export const ICON_NAME = `${ICON_PREFIX}icon-hybrid-networking-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,22a3.9583,3.9583,0,0,0-2.02.5659L17.4141,16,23.981,9.4331A3.9521,3.9521,0,0,0,26,10a4,4,0,1,0-4-4,3.951,3.951,0,0,0,.5669,2.019L16,14.5859,9.4343,8.02A3.9577,3.9577,0,0,0,10,6a4,4,0,1,0-4,4,3.9583,3.9583,0,0,0,2.02-.5659L14.5859,16,8.019,22.5669A3.9521,3.9521,0,0,0,6,22a4,4,0,1,0,4,4,3.951,3.951,0,0,0-.5669-2.019L16,17.4141,22.5657,23.98A3.9577,3.9577,0,0,0,22,26a4,4,0,1,0,4-4ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Z" /></svg>`;
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
