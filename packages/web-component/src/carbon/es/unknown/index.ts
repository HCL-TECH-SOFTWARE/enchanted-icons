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

export const ICON_NAME = `${ICON_PREFIX}icon-unknown`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="16" cy="22.5" r="1.5" /><path d="M17,19h-2v-4h2c1.103,0,2-0.897,2-2s-0.897-2-2-2h-2c-1.103,0-2,0.897-2,2v0.5h-2V13c0-2.206,1.794-4,4-4h2	c2.206,0,4,1.794,4,4s-1.794,4-4,4V19z" /><path d="M29.391,14.527L17.473,2.609C17.067,2.203,16.533,2,16,2c-0.533,0-1.067,0.203-1.473,0.609L2.609,14.527	C2.203,14.933,2,15.466,2,16s0.203,1.067,0.609,1.473l11.917,11.917C14.933,29.797,15.467,30,16,30c0.533,0,1.067-0.203,1.473-0.609	l11.917-11.917C29.797,17.067,30,16.534,30,16S29.797,14.933,29.391,14.527z M16,28.036L3.965,16L16,3.964L28.036,16L16,28.036z" /></svg>`;
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
