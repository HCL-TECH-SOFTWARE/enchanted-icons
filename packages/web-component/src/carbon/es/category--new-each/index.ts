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

export const ICON_NAME = `${ICON_PREFIX}icon-category-new-each`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29 10H24v2h5v6H22v2h3v2.142a4 4 0 102 0V20h2a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0029 10zM28 26a2 2 0 11-2-2A2.0027 2.0027 0 0128 26zM19 6H14V8h5v6H12v2h3v6.142a4 4 0 102 0V16h2a2.0023 2.0023 0 002-2V8A2.0023 2.0023 0 0019 6zM18 26a2 2 0 11-2-2A2.0027 2.0027 0 0118 26zM9 2H3A2.002 2.002 0 001 4v6a2.002 2.002 0 002 2H5V22.142a4 4 0 102 0V12H9a2.002 2.002 0 002-2V4A2.002 2.002 0 009 2zM8 26a2 2 0 11-2-2A2.0023 2.0023 0 018 26zM3 10V4H9l.0015 6z" /></svg>`;
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
