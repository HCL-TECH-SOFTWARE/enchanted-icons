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

export const ICON_NAME = `${ICON_PREFIX}icon-switch-layer-3`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22 4L22 6 24.586 6 19.586 11 21 12.414 26 7.414 26 10 28 10 28 4 22 4zM10 4L10 6 7.414 6 12.414 11 11 12.414 6 7.414 6 10 4 10 4 4 10 4zM20 5L16 1 12 5 13.414 6.414 15 4.829 15 11 17 11 17 4.829 18.586 6.414 20 5zM22 28L22 26 24.586 26 19.586 21 21 19.586 26 24.586 26 22 28 22 28 28 22 28zM10 28L10 26 7.414 26 12.414 21 11 19.586 6 24.586 6 22 4 22 4 28 10 28zM20 27L16 31 12 27 13.414 25.586 15 27.171 15 21 17 21 17 27.171 18.586 25.586 20 27zM5 12L1 16 5 20 6.414 18.586 4.829 17 11 17 11 15 4.829 15 6.414 13.414 5 12zM27 12L31 16 27 20 25.586 18.586 27.171 17 21 17 21 15 27.171 15 25.586 13.414 27 12z" /></svg>`;
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
