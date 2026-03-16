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

export const ICON_NAME = `${ICON_PREFIX}icon-phone-application`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26 2H30V6H26zM26 8H30V12H26zM20 2H24V6H20zM20 8H24V12H20zM25 30h-.17C5.18 28.87 2.39 12.29 2 7.23A3 3 0 014.7611 4.0088Q4.88 4 5 4h5.27a2 2 0 011.86 1.26L13.65 9a2 2 0 01-.44 2.16l-2.13 2.15a9.36 9.36 0 007.58 7.6l2.17-2.15A2 2 0 0123 18.35l3.77 1.51A2 2 0 0128 21.72V27A3 3 0 0125 30zM5 6a1 1 0 00-1.0032.9968c0 .0278.001.0555.0032.0832C4.46 13 7.41 27 24.94 28a1 1 0 001.0581-.9382Q26 27.0309 26 27V21.72l-3.77-1.51-2.87 2.85L18.88 23C10.18 21.91 9 13.21 9 13.12l-.06-.48 2.84-2.87L10.28 6z" /></svg>`;
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
