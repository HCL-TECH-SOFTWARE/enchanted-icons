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

export const ICON_NAME = `${ICON_PREFIX}icon-plane`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.37,14.75,20,10V6a4,4,0,0,0-8,0v4L2.63,14.75a1,1,0,0,0-.63.93v5a1,1,0,0,0,1,1,1,1,0,0,0,.29-.05L12,18v5L8.55,24.72a1,1,0,0,0-.55.9V29a1,1,0,0,0,1,1,.9.9,0,0,0,.28,0L16,28l6.72,2A.9.9,0,0,0,23,30a1,1,0,0,0,1-1V25.62a1,1,0,0,0-.55-.9L20,23V18l8.71,3.61a1,1,0,0,0,.29.05,1,1,0,0,0,1-1v-5A1,1,0,0,0,29.37,14.75ZM28,19.15,18,15v9.24l4,2v1.43l-6-1.75-6,1.75V26.24l4-2V15L4,19.15V16.3l10-5.07V6a2,2,0,0,1,4,0v5.23L28,16.3Z" /></svg>`;
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
