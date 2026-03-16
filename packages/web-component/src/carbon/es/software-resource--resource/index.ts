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

export const ICON_NAME = `${ICON_PREFIX}icon-software-resource-resource`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M6.9 8.3H11.7V10.3H6.9z" transform="rotate(-45.001 9.293 9.293)" /><path d="M4.9,19.7l-2.3-2.3C2.2,17,2,16.5,2,16s0.2-1,0.6-1.4l2.3-2.3l1.4,1.4L4,16l2.3,2.3L4.9,19.7z" /><path d="M8.3 20.3H10.3V25.1H8.3z" transform="rotate(-45.001 9.293 22.707)" /><path d="M16,30c-0.5,0-1-0.2-1.4-0.6l-2.3-2.3l1.4-1.4L16,28l2.3-2.3l1.4,1.4l-2.3,2.3C17,29.8,16.5,30,16,30z" /><path d="M20.3 21.7H25.1V23.7H20.3z" transform="rotate(-45.001 22.707 22.707)" /><path d="M27.1,19.7l-1.4-1.4L28,16l-2.3-2.3l1.4-1.4l2.3,2.3C29.8,15,30,15.5,30,16s-0.2,1-0.6,1.4L27.1,19.7z" /><path d="M21.7 6.9H23.7V11.7H21.7z" transform="rotate(-45.001 22.707 9.293)" /><path d="M16,2c-0.5,0-1,0.2-1.4,0.6l-2.3,2.3l1.4,1.4L16,4l2.3,2.3l1.4-1.4l-2.3-2.3C17,2.2,16.5,2,16,2z" /></svg>`;
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
