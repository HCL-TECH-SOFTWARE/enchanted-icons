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

export const ICON_NAME = `${ICON_PREFIX}icon-concept`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20.8851,19.4711a5.9609,5.9609,0,0,0,0-6.9422L23,10.4141l1.293,1.2929a.9995.9995,0,0,0,1.414,0l4-4a.9994.9994,0,0,0,0-1.414l-4-4a.9994.9994,0,0,0-1.414,0l-4,4a.9994.9994,0,0,0,0,1.414L21.5859,9l-2.1148,2.1149a5.9609,5.9609,0,0,0-6.9422,0L10,8.5859V2H2v8H8.5859l2.529,2.5289a5.9609,5.9609,0,0,0,0,6.9422L9,21.5859,7.707,20.293a.9994.9994,0,0,0-1.414,0l-4,4a.9994.9994,0,0,0,0,1.414l4,4a.9995.9995,0,0,0,1.414,0l4-4a.9994.9994,0,0,0,0-1.414L10.4141,23l2.1148-2.1149a5.9609,5.9609,0,0,0,6.9422,0L22,23.4141V30h8V22H23.4141ZM25,4.4141,27.5859,7,25,9.5859,22.4141,7ZM7,27.5859,4.4141,25,7,22.4141,9.5859,25ZM8,8H4V4H8Zm4,8a4,4,0,1,1,4,4A4.0045,4.0045,0,0,1,12,16Zm12,8h4v4H24Z" /></svg>`;
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
