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

export const ICON_NAME = `${ICON_PREFIX}icon-cloud-satellite-link`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30.9763,24.9748l-5.0015,5.0015a3.501,3.501,0,0,1-4.9511-4.9511L22.4383,26.44A1.5,1.5,0,0,0,24.56,28.5617L29.5617,23.56A1.5,1.5,0,0,0,27.44,21.4383l-1.4146-1.4146a3.501,3.501,0,0,1,4.9511,4.9511Z" /><path d="M20.0252,21.0237l-5.0015,5.0015a3.501,3.501,0,0,0,4.9511,4.9511L18.56,29.5617A1.5,1.5,0,0,1,16.4383,27.44L21.44,22.4383A1.5,1.5,0,0,1,23.5617,24.56l1.4146,1.4146a3.501,3.501,0,0,0-4.9511-4.9511Z" /><circle cx="7" cy="20" r="2" /><path d="M14,20a4,4,0,1,1,4-4A4.0118,4.0118,0,0,1,14,20Zm0-6a2,2,0,1,0,2,2A2.0059,2.0059,0,0,0,14,14Z" /><circle cx="21" cy="12" r="2" /><path d="M11.3076,27.2725,3,22.4258V9.5742L14,3.1577,25.4961,9.8638l1.0078-1.7276-12-7a1,1,0,0,0-1.0078,0l-12,7A.9994.9994,0,0,0,1,9V23a1.0008,1.0008,0,0,0,.4961.8643L10.3,29Z" /></svg>`;
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
