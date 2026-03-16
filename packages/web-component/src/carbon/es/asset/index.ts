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

export const ICON_NAME = `${ICON_PREFIX}icon-asset`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12,24a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,12,24Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,12,18Z" /><path d="M30,6a4.0042,4.0042,0,0,0-4-4,3.949,3.949,0,0,0-1.8537.4768L7.7571,10.9579A9.9921,9.9921,0,1,0,21.066,24.1929l8.49-16.3994A3.9491,3.9491,0,0,0,30,6ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM22.0194,5.8083C22.0163,5.8732,22,5.9343,22,6a4.0042,4.0042,0,0,0,4,4c.0645,0,.1245-.016.1882-.019l-4.3318,8.3617a10.0168,10.0168,0,0,0-8.2158-8.1962ZM12,28a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,12,28Z" /></svg>`;
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
