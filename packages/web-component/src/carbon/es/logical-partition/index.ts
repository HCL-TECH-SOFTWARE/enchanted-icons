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

export const ICON_NAME = `${ICON_PREFIX}icon-logical-partition`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="9" cy="7" r="1" /><path d="M27,22v-4c0-1.1046-.8954-2-2-2h-8v-4h9c1.1046,0,2-.8954,2-2V4c0-1.1046-.8954-2-2-2H6c-1.1046,0-2,.8954-2,2v6c0,1.1046,.8954,2,2,2H15v4H7c-1.1046,0-2,.8954-2,2v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1v-4H15v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1v-4h8v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1Zm-19,6H4v-4h4v4Zm10-4v4h-4v-4h4ZM6,10V4H26v6H6ZM28,28h-4v-4h4v4Z" /></svg>`;
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
