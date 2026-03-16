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

export const ICON_NAME = `${ICON_PREFIX}icon-tropical-storm`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,21a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,21Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,13Z" /><path d="M22.6521,4.1821l-2.177,2.5142L19.0713,8.3174,20.7864,9.605A7.9361,7.9361,0,0,1,23.9963,16l.0008.0576.0017.0415c.018.4317.2412,10.1113-14.6538,11.7222l2.18-2.5176,1.4039-1.6211L11.2139,22.395A7.9361,7.9361,0,0,1,8.0037,16l-.0008-.0576-.0017-.0415C7.9832,15.47,7.7605,5.8071,22.6521,4.1821M24.9978,2c-.0164,0-.0327,0-.0493.001C5.2532,2.9146,6.0037,16,6.0037,16a9.975,9.975,0,0,0,4.0095,7.9946L6.2368,28.3555A1.0044,1.0044,0,0,0,7.0022,30c.0164,0,.0327,0,.0493-.001C26.7468,29.0854,25.9963,16,25.9963,16a9.9756,9.9756,0,0,0-4.0092-7.9946l3.7761-4.3609A1.0044,1.0044,0,0,0,24.9978,2Z" /></svg>`;
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
