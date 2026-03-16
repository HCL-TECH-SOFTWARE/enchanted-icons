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

export const ICON_NAME = `${ICON_PREFIX}icon-face-mask`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M11.5 11A2.5 2.5 0 1014 13.5 2.5 2.5 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.5 2.5 0 0020.5 11z" /><path d="M30,16A14,14,0,1,0,8.8994,28.042l.0156.1562A1.993,1.993,0,0,0,10.9048,30h10.19a1.9929,1.9929,0,0,0,1.99-1.8008l.0156-.1572A13.9674,13.9674,0,0,0,30,16ZM16,4A11.99,11.99,0,0,1,27.97,15.397L22.7637,18H9.2363L4.0305,15.397A11.99,11.99,0,0,1,16,4ZM4.12,17.6777l3.94,1.97.5813,5.81A11.97,11.97,0,0,1,4.12,17.6777ZM21.0947,28H10.9053l-.8-8h11.79Zm2.2644-2.542.5811-5.81,3.94-1.97A11.9712,11.9712,0,0,1,23.3591,25.458Z" /></svg>`;
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
