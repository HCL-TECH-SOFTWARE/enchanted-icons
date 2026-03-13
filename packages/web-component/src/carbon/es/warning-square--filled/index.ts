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

export const ICON_NAME = `${ICON_PREFIX}icon-warning-square-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26.0022,4H5.998A1.998,1.998,0,0,0,4,5.998V26.002A1.998,1.998,0,0,0,5.998,28H26.0022A1.9979,1.9979,0,0,0,28,26.002V5.998A1.9979,1.9979,0,0,0,26.0022,4ZM14.8752,8h2.25V18h-2.25ZM16,24a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,24Z" /><path fill="none" d="M14.8751,8h2.25V18h-2.25ZM16,24a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,24Z" data-icon-path="inner-path" /></svg>`;
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
