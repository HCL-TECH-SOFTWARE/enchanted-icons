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

export const ICON_NAME = `${ICON_PREFIX}icon-soil-moisture-global`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25 30a4.7347 4.7347 0 01-4.2075-7.35l3.3687-5.1942a1 1 0 011.6779 0l3.3152 5.11A4.9753 4.9753 0 0130 25.2231 4.8979 4.8979 0 0125 30zm0-10.1629l-2.5078 3.8662A2.9264 2.9264 0 1028 25.2231a2.96 2.96 0 00-.5444-1.6028zM11 24H9A17.0192 17.0192 0 0126 7h4V9H26A15.017 15.017 0 0011 24z" /><path d="M16,24H14A12.0137,12.0137,0,0,1,26,12h4v2H26A10.0113,10.0113,0,0,0,16,24Z" /><path d="M26,2A21.8625,21.8625,0,0,0,13.9993,5.5757,21.856,21.856,0,0,0,2,2V4A19.8735,19.8735,0,0,1,12.2622,6.835,22.1514,22.1514,0,0,0,9.9475,8.979,17.001,17.001,0,0,0,2,7V9a15.0142,15.0142,0,0,1,6.6191,1.5366,22.0768,22.0768,0,0,0-1.7016,2.5371A12.0319,12.0319,0,0,0,2,12v2a9.8838,9.8838,0,0,1,4.0007.8506A21.861,21.861,0,0,0,4,24H6A20.0226,20.0226,0,0,1,26,4h4V2Z" /></svg>`;
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
