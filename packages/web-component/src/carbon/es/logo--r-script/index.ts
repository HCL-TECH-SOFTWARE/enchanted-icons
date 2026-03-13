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

export const ICON_NAME = `${ICON_PREFIX}icon-logo-r-script`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path fill-rule="evenodd" d="M30,14.7842c0-5.1782-6.2681-9.376-14-9.376S2,9.606,2,14.7842c0,4.6147,4.9814,8.4419,11.5361,9.2226v2.9917l4.7762-.0019,0-2.9741a19.3812,19.3812,0,0,0,3.3418-.6646L23.593,27l5.3975-.0024-3.253-5.4849C28.3625,19.8086,30,17.4263,30,14.7842Zm-22.4983.7c0-3.54,4.7644-6.41,10.6414-6.41s10.2138,1.9629,10.2138,6.41A5.4694,5.4694,0,0,1,24.9587,20.61a3.2252,3.2252,0,0,0-.2978-.1749,10.4735,10.4735,0,0,0-1.34-.5048s4.1743-.31,4.1743-4.4659-4.3684-4.2343-4.3684-4.2343H13.5361V21.2554C9.97,20.22,7.5017,18.0283,7.5017,15.4839Zm13.7422,1.8452-2.8928.001.0014-2.6812,2.8914.0015a1.2476,1.2476,0,0,1,1.34,1.3149A1.3232,1.3232,0,0,1,21.2439,17.3291Zm-2.9326,3.4946h1.2825a.8785.8785,0,0,1,.6406.291,3.2917,3.2917,0,0,1,.51.63,22.4033,22.4033,0,0,1-2.4326.1455Z" /></svg>`;
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
