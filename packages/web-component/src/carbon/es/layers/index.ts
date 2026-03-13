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

export const ICON_NAME = `${ICON_PREFIX}icon-layers`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,24a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,15.12,16,21.8643,28.5259,15.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,24Z" /><path d="M16 30a.9967.9967 0 01-.4741-.12l-13-7L3.4741 21.12 16 27.8643 28.5259 21.12l.9482 1.7607-13 7A.9967.9967 0 0116 30zM16 18a.9967.9967 0 01-.4741-.12l-13-7a1 1 0 010-1.7607l13-7a.9982.9982 0 01.9482 0l13 7a1 1 0 010 1.7607l-13 7A.9967.9967 0 0116 18zM5.1094 10L16 15.8643 26.8906 10 16 4.1358z" /></svg>`;
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
