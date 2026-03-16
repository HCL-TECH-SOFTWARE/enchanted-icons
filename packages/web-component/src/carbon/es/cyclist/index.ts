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

export const ICON_NAME = `${ICON_PREFIX}icon-cyclist`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25 30a6 6 0 116-6A6.0069 6.0069 0 0125 30zm0-10a4 4 0 104 4A4.0045 4.0045 0 0025 20zM7 30a6 6 0 116-6A6.0069 6.0069 0 017 30zM7 20a4 4 0 104 4A4.0045 4.0045 0 007 20z" /><path d="M17 27H15V20.4139L9.5849 15a2.003 2.003 0 010-2.8292l4.5859-4.5859a2.0024 2.0024 0 012.8286 0L21.414 12H27v1.9993L20.5853 14l-5-5L11 13.5849l6 6zM21.5 8A3.5 3.5 0 1125 4.5 3.5042 3.5042 0 0121.5 8zm0-5A1.5 1.5 0 1023 4.5 1.5017 1.5017 0 0021.5 3z" /></svg>`;
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
