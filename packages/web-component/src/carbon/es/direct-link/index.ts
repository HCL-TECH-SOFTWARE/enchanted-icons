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

export const ICON_NAME = `${ICON_PREFIX}icon-direct-link`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20.4131,14.584,12.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L1.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l3.2915,3.2915L3,22.5859,4.4141,24l1.8784-1.8784L9.584,25.4131a2.0016,2.0016,0,0,0,2.832,0l2.2559-2.2559-1.4156-1.4155L10.998,23.999,3.001,16.002l7.997-8.001,8.001,8.001L17.5,17.5l1.4146,1.4146,1.4985-1.4986a2.0016,2.0016,0,0,0,0-2.832Z" /><path d="M30.4131,14.584l-3.2915-3.2915L29,9.4141,27.5859,8,25.7075,9.8784,22.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L17.3281,8.8428l1.4146,1.4145L20.998,8.001l8.001,8.001-8.001,7.997-7.997-7.997,1.5-1.501-1.4156-1.4156L11.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l7.9971,7.9971a2.0016,2.0016,0,0,0,2.832,0l7.9971-7.9971a2.0016,2.0016,0,0,0,0-2.832Z" /></svg>`;
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
