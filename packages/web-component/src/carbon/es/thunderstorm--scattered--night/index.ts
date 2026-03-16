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

export const ICON_NAME = `${ICON_PREFIX}icon-thunderstorm-scattered-night`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M13.338 30L11.602 29 13.889 25 10 25 13.993 18 15.73 19 13.446 23 17.337 23 13.338 30z" /><path d="M29.844,13.0347a1.52,1.52,0,0,0-1.231-.8658,5.3562,5.3562,0,0,1-3.4094-1.7158A6.4652,6.4652,0,0,1,23.9187,4.06a1.6039,1.6039,0,0,0-.3-1.5459,1.4547,1.4547,0,0,0-1.3591-.4922l-.0191.0039a7.8544,7.8544,0,0,0-6.1054,6.48A7.3725,7.3725,0,0,0,13.5,8a7.5511,7.5511,0,0,0-7.1494,5.2441A5.9926,5.9926,0,0,0,8,25V23a3.9926,3.9926,0,0,1-.6733-7.9292l.663-.1128.1456-.6562a5.496,5.496,0,0,1,10.7294,0l.1456.6562.6626.1128A3.9925,3.9925,0,0,1,19,23v2a5.9549,5.9549,0,0,0,5.88-7.1455,7.502,7.502,0,0,0,4.8669-3.3A1.537,1.537,0,0,0,29.844,13.0347Zm-5.6926,2.9179a5.9658,5.9658,0,0,0-3.502-2.7085A7.5084,7.5084,0,0,0,18.0288,9.55a6.0085,6.0085,0,0,1,3.77-5.3335,8.4582,8.4582,0,0,0,1.9392,7.5967A7.4037,7.4037,0,0,0,27.64,14.041,5.4419,5.4419,0,0,1,24.1514,15.9526Z" /></svg>`;
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
