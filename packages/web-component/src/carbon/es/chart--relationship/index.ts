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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-relationship`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,6a3.9963,3.9963,0,0,0-3.8579,3H17.9305A7.9964,7.9964,0,1,0,9,17.9307v4.2114a4,4,0,1,0,2,0V17.9307a7.951,7.951,0,0,0,3.8976-1.6192l3.6693,3.67A3.9529,3.9529,0,0,0,18,22a4,4,0,1,0,4-4,3.9521,3.9521,0,0,0-2.019.5669l-3.6694-3.6694A7.9493,7.9493,0,0,0,17.9305,11h4.2116A3.9934,3.9934,0,1,0,26,6ZM12,26a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,12,26ZM10,16a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,10,16Zm14,6a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,24,22Zm2-10a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,12Z" /></svg>`;
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
