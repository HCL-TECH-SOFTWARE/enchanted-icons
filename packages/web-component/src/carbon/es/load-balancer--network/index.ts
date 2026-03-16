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

export const ICON_NAME = `${ICON_PREFIX}icon-load-balancer-network`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25 16H17V12H15v4H7a2.0023 2.0023 0 00-2 2v4H7V18h8v4h2V18h8v4h2V18A2.0023 2.0023 0 0025 16zM20 10V2H12v8h8zM14 8V4h4V8zM26 24a2.9948 2.9948 0 00-2.8157 2H18.8157a2.982 2.982 0 00-5.6314 0H8.8157a3 3 0 100 2h4.3686a2.982 2.982 0 005.6314 0h4.3686A2.9947 2.9947 0 1026 24zM6 28a1 1 0 111-1A1.0009 1.0009 0 016 28zm10 0a1 1 0 111-1A1.0009 1.0009 0 0116 28zm10 0a1 1 0 111-1A1.0009 1.0009 0 0126 28z" /></svg>`;
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
