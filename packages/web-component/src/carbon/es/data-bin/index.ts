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

export const ICON_NAME = `${ICON_PREFIX}icon-data-bin`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 2H20a2.0023 2.0023 0 00-2 2V28a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V4A2.0023 2.0023 0 0028 2zm0 2v7H20V4zm0 9v6H20V13zM20 28V21h8v7zM12 15L10 15 10 13 8 13 8 15 6 15 6 17 8 17 8 19 10 19 10 17 12 17 12 15z" /><path d="M16,6V4H10A2.0023,2.0023,0,0,0,8,6V9.08A6.99,6.99,0,0,0,8,22.92V26a2.0023,2.0023,0,0,0,2,2h6V26H10V22.92A6.99,6.99,0,0,0,10,9.08V6ZM14,16a5,5,0,1,1-5-5A5.0059,5.0059,0,0,1,14,16Z" /></svg>`;
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
