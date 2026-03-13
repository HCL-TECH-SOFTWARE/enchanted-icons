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

export const ICON_NAME = `${ICON_PREFIX}icon-join-right`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,6a9.95,9.95,0,0,0-4.0032.8394,9.9909,9.9909,0,0,1,0,18.3212A9.9988,9.9988,0,1,0,20,6Z" /><path fill="none" d="M20,16a8.01,8.01,0,0,0-6.2483-7.8008,9.9758,9.9758,0,0,1,2.2451-1.36,9.9909,9.9909,0,0,1,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A8.01,8.01,0,0,0,20,16Z" data-icon-path="inner-path" /><path d="M10,16a9.9759,9.9759,0,0,0,3.7517,7.8008,7.9937,7.9937,0,0,0,0-15.6016A9.9759,9.9759,0,0,0,10,16Z" /><path d="M12,24A8,8,0,1,1,13.7517,8.1992a9.9758,9.9758,0,0,1,2.2451-1.36,10,10,0,1,0,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A7.9727,7.9727,0,0,1,12,24Z" /></svg>`;
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
