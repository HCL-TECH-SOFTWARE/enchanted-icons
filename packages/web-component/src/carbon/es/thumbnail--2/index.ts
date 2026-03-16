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

export const ICON_NAME = `${ICON_PREFIX}icon-thumbnail-2`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8 30H4a2 2 0 01-2-2V24a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 30zM4 24v4H8V24zM18 30H14a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 30zm-4-6v4h4V24zM28 30H24a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 30zm-4-6v4h4V24zM8 20H4a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 20zM4 14v4H8V14zM18 20H14a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 20zm-4-6v4h4V14zM28 20H24a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 20zm-4-6v4h4V14zM8 10H4A2 2 0 012 8V4A2 2 0 014 2H8a2 2 0 012 2V8A2 2 0 018 10zM4 4V8H8V4zM18 10H14a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0118 10zM14 4V8h4V4zM28 10H24a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0128 10zM24 4V8h4V4z" /></svg>`;
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
