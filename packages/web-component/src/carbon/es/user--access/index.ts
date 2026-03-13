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

export const ICON_NAME = `${ICON_PREFIX}icon-user-access`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16 30H14V25a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v5H2V25a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 10a3 3 0 11-3 3 3 3 0 013-3M9 8a5 5 0 105 5A5 5 0 009 8zM30 12a1.9922 1.9922 0 00-.5117.0742L28.4331 11.019a3.8788 3.8788 0 000-4.038l1.0552-1.0552a2.0339 2.0339 0 10-1.4141-1.4141L27.019 5.5669a3.8788 3.8788 0 00-4.038 0L21.9258 4.5117a2.0339 2.0339 0 10-1.4141 1.4141L21.5669 6.981a3.8788 3.8788 0 000 4.038l-1.0552 1.0552a2.0339 2.0339 0 101.4141 1.4141l1.0552-1.0552a3.8788 3.8788 0 004.038 0l1.0552 1.0552A1.9957 1.9957 0 1030 12zM23 9a2 2 0 112 2A2.0025 2.0025 0 0123 9z" /></svg>`;
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
