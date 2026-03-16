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

export const ICON_NAME = `${ICON_PREFIX}icon-stem-leaf-plot`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19 10a3 3 0 113-3A3.0033 3.0033 0 0119 10zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 6zM19 19a3 3 0 113-3A3.0033 3.0033 0 0119 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 15zM27 19a3 3 0 113-3A3.0033 3.0033 0 0127 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 0027 15zM19 28a3 3 0 113-3A3.0033 3.0033 0 0119 28zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 24zM12 2H14V30H12zM7 28a3 3 0 113-3A3.0033 3.0033 0 017 28zm0-4a1 1 0 101 1A1.0011 1.0011 0 007 24zM7 19a3 3 0 113-3A3.0033 3.0033 0 017 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 007 15zM7 10a3 3 0 113-3A3.0033 3.0033 0 017 10zM7 6A1 1 0 108 7 1.0011 1.0011 0 007 6z" /></svg>`;
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
