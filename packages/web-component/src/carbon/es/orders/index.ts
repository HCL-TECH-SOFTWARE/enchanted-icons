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

export const ICON_NAME = `${ICON_PREFIX}icon-orders`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 13h-2v-2c0-2.8-2.2-5-5-5h-3V4h3c3.9 0 7 3.1 7 7V13zM22 20H25V22H22zM22 24H25V26H22z" /><path d="M27 30h-5v-2h5V18h-7v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h2v3c0 .6.4 1 1 1s1-.4 1-1V16h11v12C29 29.1 28.1 30 27 30zM12 28h-1c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h1V28zM11 10v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v6c0 1.1.9 2 2 2h2.4l1.7 3 1.7-1-2.3-4H4V4h10v6H11z" /></svg>`;
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
