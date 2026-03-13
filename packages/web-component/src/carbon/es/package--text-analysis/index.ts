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

export const ICON_NAME = `${ICON_PREFIX}icon-package-text-analysis`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M13 22H19V24H13z" /><path d="M2 18v2h2v8c0 1.1025.8972 2 2 2h20c1.1028 0 2-.8975 2-2v-8h2v-2H2zm24 10H6v-8h20v8zM29 16h-5c-1.1025 0-2-.8975-2-2v-6c0-1.103.8975-2 2-2h5v2h-5v6h5v2zM18 6h-4v-4h-2v14h6c1.1025 0 2-.8975 2-2v-6c0-1.103-.8975-2-2-2zm-4 8v-6h4v6h-4zM8 6H3v2h5v2h-4c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h6V8c0-1.103-.8975-2-2-2zm0 8h-4v-2h4v2z" /></svg>`;
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
