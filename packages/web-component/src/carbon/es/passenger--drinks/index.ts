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

export const ICON_NAME = `${ICON_PREFIX}icon-passenger-drinks`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30 4V2H22V4a3.9906 3.9906 0 003 3.8586V11H23v2h6V11H27V7.8586A3.9906 3.9906 0 0030 4zM10.5 9A3.5 3.5 0 1114 5.5 3.5042 3.5042 0 0110.5 9zm0-5A1.5 1.5 0 1012 5.5 1.5017 1.5017 0 0010.5 4zM22.4746 31.313L19.3408 24H12.2393A4.0073 4.0073 0 018.373 21.0293l-1.6337-6.126a3.8987 3.8987 0 017.5341-2.0092L15.1016 16H21v2H13.5645l-1.2227-4.5908a1.9 1.9 0 00-3.6709.979l1.6338 6.1255A2.0052 2.0052 0 0012.2393 22h8.42l3.6543 8.5254z" /><path d="M18,28H7.7683a2.0025,2.0025,0,0,1-1.9326-1.4849L2.0337,12.2576l1.9326-.5152L7.7683,26H18Z" /></svg>`;
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
