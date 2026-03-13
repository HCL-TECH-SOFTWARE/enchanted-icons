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

export const ICON_NAME = `${ICON_PREFIX}icon-train-heart`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.303 2a2.6613 2.6613 0 00-1.9079.8059l-.3932.4053-.397-.4053a2.6612 2.6612 0 00-3.8157 0 2.7991 2.7991 0 000 3.8963L25.0019 11l4.2089-4.2978a2.7991 2.7991 0 000-3.8963A2.6613 2.6613 0 0027.303 2zM22 13v3H6V10h9V8H6.1843A2.9948 2.9948 0 019 6h6V4H9A5.0057 5.0057 0 004 9V21a4.99 4.99 0 003.582 4.77L5.7693 30H7.9451l1.7143-4h8.6812l1.7143 4h2.1758L20.418 25.77A4.99 4.99 0 0024 21V13zm0 7H19v2h2.8157A2.9948 2.9948 0 0119 24H9a2.9948 2.9948 0 01-2.8157-2H9V20H6V18H22z" /></svg>`;
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
