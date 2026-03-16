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

export const ICON_NAME = `${ICON_PREFIX}icon-rotate`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M17.91 26.82l.35 2a12.9 12.9 0 004.24-1.54l-1-1.73A10.88 10.88 0 0117.91 26.82zM24.42 23.07L26 24.35a13 13 0 002.24-3.91l-1.87-.68A11 11 0 0124.42 23.07zM9.5 27.25a12.9 12.9 0 004.24 1.54l.35-2a10.88 10.88 0 01-3.59-1.3zM5.67 19.76l-1.87.68A13 13 0 006 24.35l.32-.26 1.22-1h0a11 11 0 01-1.91-3.31zM29 16a12.85 12.85 0 00-.8-4.44l-1.87.68A11.18 11.18 0 0127 16zM26 7.65a13 13 0 00-20 0V4H4v8h8V10H6.81A11 11 0 0124.42 8.93z" /></svg>`;
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
