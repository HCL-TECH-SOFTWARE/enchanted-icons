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

export const ICON_NAME = `${ICON_PREFIX}icon-task-tools`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.5,32a3.4762,3.4762,0,0,1-2.4751-1.0254L21.897,26.8469a6.496,6.496,0,0,1-7.3482-8.9563l.5879-1.34L19.293,20.707a1.0234,1.0234,0,0,0,1.4135,0,.999.999,0,0,0,.0005-1.4141l-4.1562-4.1565,1.34-.5881a6.4965,6.4965,0,0,1,8.9566,7.3486l4.1274,4.1282A3.5,3.5,0,0,1,28.5,32Zm-6.03-7.4087,4.9693,4.9692a1.5352,1.5352,0,0,0,2.1211,0,1.4985,1.4985,0,0,0,0-2.1208v0l-4.9692-4.97.188-.5823A4.496,4.496,0,0,0,20.5,16q-.126,0-.25.0068l1.8716,1.8721a2.9992,2.9992,0,0,1,0,4.2424,3.0722,3.0722,0,0,1-4.2427-.0005l-1.8716-1.8715Q16,20.3741,16,20.5A4.4968,4.4968,0,0,0,21.8877,24.78Z" /><path d="M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h7V28H7V7h3v3H22V7h3v5h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z" /></svg>`;
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
