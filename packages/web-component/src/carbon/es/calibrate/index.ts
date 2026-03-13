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

export const ICON_NAME = `${ICON_PREFIX}icon-calibrate`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.83,21.17,25,17.37l.67-.67a1,1,0,0,0,0-1.41l-6-6a1,1,0,0,0-1.41,0h0l-.79.79L10.71,3.29a1,1,0,0,0-1.41,0h0l-4,4-.12.15-4,6a1,1,0,0,0,.12,1.26l3,3a1,1,0,0,0,1.42,0L10,13.41l2.09,2.09-4.8,4.79a1,1,0,0,0,0,1.41l2,2A1,1,0,0,0,10,24a1,1,0,0,0,.52-.15l4.33-2.6,2.44,2.45a1,1,0,0,0,1.41,0h0l.67-.7,3.79,3.83a4,4,0,0,0,5.66-5.66ZM10,10.58l-5,5L3.29,13.87,6.78,8.63,10,5.41l6.09,6.09L13.5,14.08Zm8,11-2.84-2.84-5,3L9.42,21,19,11.41,23.59,16Zm9.42,3.83a2,2,0,0,1-2.83,0h0l-3.8-3.79,2.83-2.83,3.8,3.79a2,2,0,0,1,0,2.83Z" /></svg>`;
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
