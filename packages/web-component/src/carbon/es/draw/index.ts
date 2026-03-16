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

export const ICON_NAME = `${ICON_PREFIX}icon-draw`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19.14,28a3.42,3.42,0,0,1-2.42-5.85L21.86,17a1.42,1.42,0,1,0-2-2L13,21.85a3.5,3.5,0,0,1-4.85,0,3.43,3.43,0,0,1,0-4.84l8.58-8.58a1.42,1.42,0,1,0-2-2L6.41,14.7,5,13.3,13.29,5a3.43,3.43,0,0,1,4.84,4.85L9.56,18.42a1.42,1.42,0,0,0,0,2,1.45,1.45,0,0,0,2,0l6.86-6.86a3.43,3.43,0,1,1,4.85,4.84l-5.15,5.15a1.42,1.42,0,0,0,2,2l4.44-4.43L26,22.56,21.56,27A3.38,3.38,0,0,1,19.14,28Z" /></svg>`;
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
