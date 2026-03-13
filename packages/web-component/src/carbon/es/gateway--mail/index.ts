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

export const ICON_NAME = `${ICON_PREFIX}icon-gateway-mail`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19.8779,12.1218a.4186.4186,0,0,0-.437-.0971l-9.1666,3.3335a.4167.4167,0,0,0-.0122.7786l4.0006,1.6,1.6,4.0007A.4168.4168,0,0,0,16.25,22h.0067a.4169.4169,0,0,0,.3849-.2743l3.3333-9.1669A.4165.4165,0,0,0,19.8779,12.1218Z" /><path d="M30.4141,17.4141a1.9995,1.9995,0,0,0,0-2.8282L24.6272,8.7993l2.9006-2.8628a2.0018,2.0018,0,1,0-1.4416-1.3872L23.2129,7.3848,17.4141,1.5859a1.9995,1.9995,0,0,0-2.8282,0L8.7993,7.3726,5.9368,4.4717A2.002,2.002,0,1,0,4.55,5.9136l2.835,2.8735L1.5859,14.5859a1.9995,1.9995,0,0,0,0,2.8282l5.7989,5.7988L4.55,26.0864a1.9977,1.9977,0,1,0,1.387,1.4419l2.8625-2.9009,5.7866,5.7867a1.9995,1.9995,0,0,0,2.8282,0l5.7988-5.7989,2.8733,2.8355a1.998,1.998,0,1,0,1.4416-1.3872l-2.9006-2.8628ZM16,29,3,16,16,3,29,16Z" /></svg>`;
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
