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

export const ICON_NAME = `${ICON_PREFIX}icon-data-connected`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30 30L24 30 24 28 28 28 28 4 24 4 24 2 30 2 30 30z" /><path d="M24.91,19.59a4.51,4.51,0,0,0-2.66-3.24,4.55,4.55,0,0,0-3.5,0,4.94,4.94,0,0,0-.64.35L15.3,13.89a4.53,4.53,0,1,0-1.41,1.41l2.81,2.81a4.48,4.48,0,0,0-.61,3.3,4.51,4.51,0,0,0,2.66,3.24,4.55,4.55,0,0,0,3.5,0,4.51,4.51,0,0,0,2.66-3.24,4.65,4.65,0,0,0,0-1.82ZM11.5,14A2.5,2.5,0,1,1,14,11.5,2.5,2.5,0,0,1,11.5,14Z" /><path d="M8 30L2 30 2 2 8 2 8 4 4 4 4 28 8 28 8 30z" /></svg>`;
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
