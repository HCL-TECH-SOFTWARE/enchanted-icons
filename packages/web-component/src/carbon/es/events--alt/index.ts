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

export const ICON_NAME = `${ICON_PREFIX}icon-events-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18 31h2V29a1.0006 1.0006 0 011-1h6a1.0006 1.0006 0 011 1v2h2V29a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 25a4 4 0 114-4A4.0039 4.0039 0 0124 25zm0-6a2 2 0 102 2A2.0027 2.0027 0 0024 19zM2 31H4V29a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V29a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3zM8 25a4 4 0 114-4A4.0042 4.0042 0 018 25zm0-6a2 2 0 102 2A2.0023 2.0023 0 008 19zM18 16h2V14a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V14a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 10a4 4 0 114-4A4.0042 4.0042 0 0124 10zm0-6a2 2 0 102 2A2.0023 2.0023 0 0024 4zM2 16H4V14a1.0013 1.0013 0 011-1h6a1.0013 1.0013 0 011 1v2h2V14a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3zM8 10a4 4 0 114-4A4.0045 4.0045 0 018 10zM8 4a2 2 0 102 2A2.002 2.002 0 008 4z" /></svg>`;
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
