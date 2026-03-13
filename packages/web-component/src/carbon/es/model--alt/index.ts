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

export const ICON_NAME = `${ICON_PREFIX}icon-model-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.4473,16.1055,23,13.3818V7a1,1,0,0,0-.5527-.8945l-6-3a1.0008,1.0008,0,0,0-.8946,0l-6,3A1,1,0,0,0,9,7v6.3818L3.5527,16.1055A1,1,0,0,0,3,17v7a1,1,0,0,0,.5527.8945l6,3a1.001,1.001,0,0,0,.8946,0L16,25.1182l5.5527,2.7763a1.001,1.001,0,0,0,.8946,0l6-3A1,1,0,0,0,29,24V17A1,1,0,0,0,28.4473,16.1055ZM21,13.3818l-4,2V10.6182l4-2ZM16,5.1182,19.7637,7,16,8.8818,12.2363,7Zm-5,3.5,4,2v4.7636l-4-2ZM9,25.3818l-4-2V18.6182l4,2Zm1-6.5L6.2363,17,10,15.1182,13.7637,17Zm1,1.7364,4-2v4.7636l-4,2Zm10,4.7636-4-2V18.6182l4,2Zm1-6.5L18.2363,17,22,15.1182,25.7637,17Zm5,4.5-4,2V20.6182l4-2Z" /></svg>`;
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
