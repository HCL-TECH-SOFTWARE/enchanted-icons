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

export const ICON_NAME = `${ICON_PREFIX}icon-satellite-radar`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,14H28A10.0113,10.0113,0,0,0,18,4V2A12.0137,12.0137,0,0,1,30,14Z" /><path d="M26 14H24a6.0067 6.0067 0 00-6-6V6A8.0092 8.0092 0 0126 14zM16 28V24.96a9.9124 9.9124 0 007.3179-2.208 1.8482 1.8482 0 00.6777-1.3344 1.8 1.8 0 00-.5239-1.36L18.4141 15 21 12.4141 19.5859 11 17 13.5859 11.9419 8.5273a1.8145 1.8145 0 00-1.36-.5229 1.845 1.845 0 00-1.3339.6782 9.9566 9.9566 0 00-.5127 11.95L6.2793 28H2v2H30V28zM10.68 10.0938L21.9058 21.32A8.0011 8.0011 0 0110.68 10.0938zM14 28H8.3875l1.8757-5.627A9.9894 9.9894 0 0014 24.5435z" /></svg>`;
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
