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

export const ICON_NAME = `${ICON_PREFIX}icon-help-desk`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27 10H21a3.0033 3.0033 0 00-3 3v6a2.0023 2.0023 0 002 2v7a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V21a2.0023 2.0023 0 002-2V13A3.0033 3.0033 0 0027 10zm1 9H26v9H22V19H20V13a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1zM20 5a4 4 0 114 4A4.0042 4.0042 0 0120 5zm2 0a2 2 0 102-2A2.0023 2.0023 0 0022 5zM14 16V13a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3v3H0v2H16V16zM4 13a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v3H4zM4 5A4 4 0 118 9 4.0042 4.0042 0 014 5zM6 5A2 2 0 108 3 2.0023 2.0023 0 006 5z" /></svg>`;
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
