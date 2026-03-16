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

export const ICON_NAME = `${ICON_PREFIX}icon-arrival`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 28H30V30H2zM17.21 5.23l1.39.38 1 11.29 5.87 1.57A2 2 0 0127 20.62a1.88 1.88 0 01-1.37 1.52 2 2 0 01-1 0l-18.7-5a1.89 1.89 0 01-1.33-2.3L6.35 8.34l1.44.38L8.4 13.9l6 1.62L17.21 5.23m-1-2.2a1 1 0 00-.68.69L13 13.07l-2.81-.75L9.69 7.79A1 1 0 009 7L5.87 6.14a.94.94 0 00-.5 0 1 1 0 00-.68.68l-2 7.49a3.87 3.87 0 002.74 4.74l18.71 5A3.87 3.87 0 0029 21a4 4 0 00-3-4.42l-4.52-1.21L20.53 4.71a1 1 0 00-.72-.85L16.73 3a1.06 1.06 0 00-.5 0z" /></svg>`;
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
