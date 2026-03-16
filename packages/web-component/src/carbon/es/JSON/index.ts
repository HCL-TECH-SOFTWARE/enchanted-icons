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

export const ICON_NAME = `${ICON_PREFIX}icon-json`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M31 11L31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11zM21.3335 21h-2.667A1.6684 1.6684 0 0117 19.3335v-6.667A1.6684 1.6684 0 0118.6665 11h2.667A1.6684 1.6684 0 0123 12.6665v6.667A1.6684 1.6684 0 0121.3335 21zM19 19h2V13H19zM13.3335 21H9V19h4V17H11a2.002 2.002 0 01-2-2V12.6665A1.6684 1.6684 0 0110.6665 11H15v2H11v2h2a2.002 2.002 0 012 2v2.3335A1.6684 1.6684 0 0113.3335 21zM5.3335 21H2.6665A1.6684 1.6684 0 011 19.3335V17H3v2H5V11H7v8.3335A1.6684 1.6684 0 015.3335 21z" /></svg>`;
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
