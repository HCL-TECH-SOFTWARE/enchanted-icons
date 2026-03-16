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

export const ICON_NAME = `${ICON_PREFIX}icon-strawberry`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M9 10H11V12H9zM9 14H11V16H9zM13 12H15V14H13z" /><path d="M9 28a5.169 5.169 0 01-.7441-.054A5.0935 5.0935 0 014 22.8669V11.1985a7.1615 7.1615 0 016.31-7.1653 6.9607 6.9607 0 014.4643 1.0706l7.9688 4.9807a6.98 6.98 0 01-.6885 12.19l-10.88 5.2285A4.9765 4.9765 0 019 28zM11.002 6q-.2484 0-.5005.0241A5.1463 5.1463 0 006 11.1985V22.8669a3.0839 3.0839 0 002.5435 3.1 3.0266 3.0266 0 001.7622-.2649l10.8828-5.23a4.9807 4.9807 0 00.4887-8.6958L13.7046 6.7935A4.9687 4.9687 0 0011.002 6zM26 7H22a4.0045 4.0045 0 01-4-4V2h2V3a2.0021 2.0021 0 002 2h4z" /></svg>`;
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
