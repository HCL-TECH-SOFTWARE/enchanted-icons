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

export const ICON_NAME = `${ICON_PREFIX}icon-traffic-incident`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 28H30V30H2z" /><path d="M11.314 11.514H17.314V13.514H11.314z" transform="rotate(-45 14.314 12.514)" /><path d="M12.0815,23.4329l4.1168,2.3176a2.009,2.009,0,0,0,2.3853-.3344l8.8326-8.8326a2.0088,2.0088,0,0,0,.334-2.3856l-2.2977-4.136,1.79-1.79L25.8283,6.8577,24.4141,8.2719l-4.95-4.95a2.0026,2.0026,0,0,0-2.8285,0L14.5146,1.2008,13.1,2.615l2.1213,2.1214L6.7364,13.2216,4.6151,11.1,3.2009,12.5145l2.1213,2.1213a2.0025,2.0025,0,0,0,0,2.8285l4.95,4.95L8.8577,23.8282l1.4143,1.4142Zm13.92-8.2636-8.8328,8.8328-4.5456-2.5255L23.4767,10.6235ZM9.5649,18.8785l1.4142-1.4142L9.5649,16.05,8.1506,17.4643,6.7364,16.05,18.05,4.7364l1.4143,1.4142L18.05,7.5648,19.4644,8.979l1.4142-1.4142L22.2928,8.979,10.9791,20.2927Z" /></svg>`;
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
