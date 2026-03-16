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

export const ICON_NAME = `${ICON_PREFIX}icon-view-off-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30.94 15.66a16.4 16.4 0 00-5.73-7.45L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.09A15.38 15.38 0 0016 27 16.69 16.69 0 0030.94 16.34 1 1 0 0030.94 15.66zM16 22.5a6.46 6.46 0 01-3.83-1.26L14 19.43A4 4 0 0019.43 14l1.81-1.81A6.49 6.49 0 0116 22.5zM4.53 21.81l5-5A6.84 6.84 0 019.5 16 6.51 6.51 0 0116 9.5a6.84 6.84 0 01.79.05l3.78-3.77A14.39 14.39 0 0016 5 16.69 16.69 0 001.06 15.66a1 1 0 000 .68A15.86 15.86 0 004.53 21.81z" /></svg>`;
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
