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

export const ICON_NAME = `${ICON_PREFIX}icon-buoy`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,22a3.4376,3.4376,0,0,1-3.0513-2.3164,1,1,0,0,0-1.8955-.0049A3.44,3.44,0,0,1,20,22a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,16,19a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,12,22a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,8,19a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,4,22H2v2H4a4.9316,4.9316,0,0,0,4-1.9873,5.5965,5.5965,0,0,0,1,.9912,7,7,0,0,0,14,0,5.5965,5.5965,0,0,0,1-.9912A4.9316,4.9316,0,0,0,28,24h2V22ZM16,28a5.0021,5.0021,0,0,1-4.9075-4.0854A5.2252,5.2252,0,0,0,12,24a4.9316,4.9316,0,0,0,4-1.9873A4.9316,4.9316,0,0,0,20,24a5.2252,5.2252,0,0,0,.9075-.0854A5.0021,5.0021,0,0,1,16,28Z" /><path d="M20.07,7.8345A2.0116,2.0116,0,0,0,18.0771,6H17V2H15V6H13.9175a1.9949,1.9949,0,0,0-1.9859,1.7715L10.2805,19h2.021l.7346-5h5.9212l.7351,5h2.021ZM13.33,12l.5877-4,4.167.0625L18.6633,12Z" /></svg>`;
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
