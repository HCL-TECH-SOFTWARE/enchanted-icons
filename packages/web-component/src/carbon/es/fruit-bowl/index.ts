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

export const ICON_NAME = `${ICON_PREFIX}icon-fruit-bowl`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,15a6.0025,6.0025,0,0,0-3.1067-5.2529A3.9792,3.9792,0,0,0,24,7H22a2.0023,2.0023,0,0,1-2,2,6.004,6.004,0,0,0-5.9946,5.8921A7.0005,7.0005,0,0,1,12,10,3.9961,3.9961,0,0,0,9,6.1419V4H7V6.1419A3.9961,3.9961,0,0,0,4,10v5H2v1a14,14,0,0,0,28,0V15Zm-6-4a4.0045,4.0045,0,0,1,4,4H16A4.0045,4.0045,0,0,1,20,11ZM6,10a2,2,0,1,1,4,0,8.991,8.991,0,0,0,1.5322,5H6ZM16,28A12.0166,12.0166,0,0,1,4.0415,17h23.917A12.0166,12.0166,0,0,1,16,28Z" /></svg>`;
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
