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

export const ICON_NAME = `${ICON_PREFIX}icon-select-window`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8 26H4a2.0021 2.0021 0 01-2-2V20H4v4H8zM2 12H4V16H2zM26 8H24V4H20V2h4a2.0021 2.0021 0 012 2zM12 2H16V4H12zM4 8H2V4A2.0021 2.0021 0 014 2H8V4H4zM27 32a.9967.9967 0 01-.707-.293l-6.1377-6.1377L16.832 30.5547a1 1 0 01-1.79-.2676l-6-20A1 1 0 0110.2871 9.042l20 6a1 1 0 01.2676 1.79l-4.9854 3.3233L31.707 26.293a.9994.9994 0 010 1.414l-4 4A.9967.9967 0 0127 32zm0-2.4141L29.5859 27 22.431 19.845l5.2458-3.4978L11.4917 11.4917l4.8555 16.1851L19.845 22.431z" /></svg>`;
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
