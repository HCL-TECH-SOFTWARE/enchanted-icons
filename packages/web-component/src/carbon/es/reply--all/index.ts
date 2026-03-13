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

export const ICON_NAME = `${ICON_PREFIX}icon-reply-all`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19,29a.9989.9989,0,0,1-.768-.36l-10-12a1,1,0,0,1,0-1.28l10-12A1,1,0,0,1,20,4v7.0325c7.0074.4629,11,5.86,11,14.9677a1,1,0,0,1-1.8.6c-2.8218-3.7623-5.3912-5.3463-9.2-5.5716V28a1,1,0,0,1-1,1ZM10.3016,16,18,25.238V20a1,1,0,0,1,1-1,12.7127,12.7127,0,0,1,9.8414,4.0909C28.0864,16.5553,24.6587,13,19,13a1,1,0,0,1-1-1V6.7618Z" /><path d="M11.4639,28.9182,1.2318,16.64a1,1,0,0,1,0-1.28L11.4638,3.0792,13,4.36,3.3016,16,13,27.638Z" /></svg>`;
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
