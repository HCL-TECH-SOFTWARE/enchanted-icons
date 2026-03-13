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

export const ICON_NAME = `${ICON_PREFIX}icon-cut-out`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19.05 13.7326L18.05 12 7.928 17.8457 6.9312 17.27a2.9524 2.9524 0 00.6672-.769A3 3 0 103.5 17.5986l2.428 1.4019L3.5 20.4023a3.0342 3.0342 0 103.4407.3223l.987-.5693L14.5914 24l1-1.7294-5.6634-3.27zM4.0344 15.26a1 1 0 11.4658.6069A.9929.9929 0 014.0344 15.26zM4.9988 22a1 1 0 11-.8645 1.5A1 1 0 014.9988 22zM17 26H21V28H17zM10 26H14V28H10z" /><path d="M28,28H24V26h4V4H7V8H5V4A2.0023,2.0023,0,0,1,7,2H28a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,28,28Z" /></svg>`;
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
