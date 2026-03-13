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

export const ICON_NAME = `${ICON_PREFIX}icon-cookie`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="10" cy="21" r="2" /><circle cx="23" cy="20" r="2" /><circle cx="13" cy="10" r="2" /><circle cx="14" cy="15" r="1" /><circle cx="23" cy="5" r="2" /><circle cx="29" cy="3" r="1" /><circle cx="16" cy="23" r="1" /><path d="M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2c0.1,0,0.2,0,0.3,0l1.4,0.1l-0.3,1.2c-0.1,0.4-0.2,0.9-0.2,1.3c0,2.8,2.2,5,5,5	c1,0,2-0.3,2.9-0.9l1.3,1.5c-0.4,0.4-0.6,0.9-0.6,1.4c0,1.3,1.3,2.4,2.7,1.9l1.2-0.5l0.2,1.3C30,14.9,30,15.5,30,16	C30,23.7,23.7,30,16,30z M15.3,4C9,4.4,4,9.6,4,16c0,6.6,5.4,12,12,12s12-5.4,12-12c0-0.1,0-0.3,0-0.4c-2.3,0.1-4.2-1.7-4.2-4	c0-0.1,0-0.1,0-0.2c-0.5,0.1-1,0.2-1.6,0.2c-3.9,0-7-3.1-7-7C15.2,4.4,15.2,4.2,15.3,4z" /></svg>`;
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
