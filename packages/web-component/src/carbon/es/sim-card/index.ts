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

export const ICON_NAME = `${ICON_PREFIX}icon-sim-card`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,9H8a2.0023,2.0023,0,0,0-2,2V21a2.0023,2.0023,0,0,0,2,2H21a2.0023,2.0023,0,0,0,2-2V11A2.0023,2.0023,0,0,0,21,9Zm0,4H18V11h3Zm-3,2h3v2H18Zm-2-4V21H13V14a1,1,0,0,0-1-1H8V11Zm-5,6H8V15h3ZM8,19h3v2H8Zm10,2V19h3v2Z" /><path d="M23.5317,27H4a2.0021,2.0021,0,0,1-2-2V7A2.0021,2.0021,0,0,1,4,5H28a2.0021,2.0021,0,0,1,2,2V19.6379a2.0044,2.0044,0,0,1-.4639,1.2808L25.0679,26.28A1.9944,1.9944,0,0,1,23.5317,27ZM4,7V25H23.5317L28,19.6379V7Z" /></svg>`;
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
