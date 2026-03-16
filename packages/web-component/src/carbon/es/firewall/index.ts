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

export const ICON_NAME = `${ICON_PREFIX}icon-firewall`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27 20.3972v3c-1 0-2-1.5-2-4v-3c-4 5-5 7-5 9A5.0008 5.0008 0 0023.0458 30 7.5281 7.5281 0 0125 26.3972 7.5281 7.5281 0 0126.9542 30 5.0008 5.0008 0 0030 25.3972C30 23.3972 28.875 21.8258 27 20.3972zM17 28H4V24H17V22H4a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2H17z" /><path d="M28 12H7a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2H17V18H7V14H28l.0011 2H30V14A2.0023 2.0023 0 0028 12zM25 10H4A2.0021 2.0021 0 012 8V4A2.0021 2.0021 0 014 2H25a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 0125 10zM4 4V8H25V4z" /></svg>`;
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
