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

export const ICON_NAME = `${ICON_PREFIX}icon-touch-1`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,8H18A5,5,0,0,0,8,8H6A7,7,0,0,1,20,8Z" /><path d="M25,15a2.94,2.94,0,0,0-1.47.4A3,3,0,0,0,21,14a2.94,2.94,0,0,0-1.47.4A3,3,0,0,0,16,13.18V8h0a3,3,0,0,0-6,0V19.1L7.77,17.58h0A2.93,2.93,0,0,0,6,17a3,3,0,0,0-2.12,5.13l8,7.3A6.16,6.16,0,0,0,16,31h5a7,7,0,0,0,7-7V18A3,3,0,0,0,25,15Zm1,9a5,5,0,0,1-5,5H16a4.17,4.17,0,0,1-2.76-1L5.29,20.7A1,1,0,0,1,5,20a1,1,0,0,1,1.6-.8L12,22.9V8a1,1,0,0,1,2,0h0V19h2V16a1,1,0,0,1,2,0v3h2V17a1,1,0,0,1,2,0v2h2V18a1,1,0,0,1,2,0Z" /></svg>`;
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
