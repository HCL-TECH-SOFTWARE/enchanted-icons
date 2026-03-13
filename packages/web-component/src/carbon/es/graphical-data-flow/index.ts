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

export const ICON_NAME = `${ICON_PREFIX}icon-graphical-data-flow`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 30H22a2.0023 2.0023 0 01-2-2V22a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0128 30zm-6-8h-.0012L22 28h6V22zM18 26H12a3.0033 3.0033 0 01-3-3V19h2v4a1.001 1.001 0 001 1h6zM26 18H24V15a1.001 1.001 0 00-1-1H18V12h5a3.0033 3.0033 0 013 3zM15 18a.9986.9986 0 01-.4971-.1323L10 15.2886 5.4968 17.8677a1 1 0 01-1.4712-1.0938l1.0618-4.572L2.269 9.1824a1 1 0 01.5662-1.6687l4.2-.7019L9.1006 2.5627a1 1 0 011.7881-.0214l2.2046 4.271 4.0764.7021a1 1 0 01.5613 1.668l-2.8184 3.02 1.0613 4.5718A1 1 0 0115 18zm-5-5s.343.18.4971.2686l3.01 1.7241-.7837-3.3763 2.282-2.4453-3.2331-.5569-1.7456-3.382L8.3829 8.6144l-3.3809.565 2.2745 2.437-.7841 3.3763 3.0105-1.7241C9.657 13.18 10 13 10 13z" /></svg>`;
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
