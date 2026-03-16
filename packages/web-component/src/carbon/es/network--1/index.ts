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

export const ICON_NAME = `${ICON_PREFIX}icon-network-1`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16 20a4 4 0 114-4A4.0045 4.0045 0 0116 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0016 14zM5 20a4 4 0 114-4A4.0045 4.0045 0 015 20zm0-6a2 2 0 102 2A2.0023 2.0023 0 005 14zM10 31a4 4 0 114-4A4.0045 4.0045 0 0110 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 25zM22 31a4 4 0 114-4A4.0045 4.0045 0 0122 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 25zM27 20a4 4 0 114-4A4.0045 4.0045 0 0127 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0027 14zM22 9a4 4 0 114-4A4.0045 4.0045 0 0122 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 3zM10 9a4 4 0 114-4A4.0045 4.0045 0 0110 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 3z" /></svg>`;
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
