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

export const ICON_NAME = `${ICON_PREFIX}icon-cloud-internet-services`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,22c-0.7,0-1.4,0.3-1.9,0.7l-5.2-3.1c0-0.2,0.1-0.4,0.1-0.6s0-0.4-0.1-0.6l5.2-3.1c0.5,0.4,1.2,0.7,1.9,0.7	c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3c0,0.2,0,0.4,0.1,0.6l-5.2,3.1C18.4,16.3,17.7,16,17,16c-1.7,0-3,1.3-3,3s1.3,3,3,3	c0.7,0,1.4-0.3,1.9-0.7l5.2,3.1c0,0.2-0.1,0.4-0.1,0.6c0,1.7,1.3,3,3,3s3-1.3,3-3S28.7,22,27,22z M27,12c0.6,0,1,0.4,1,1s-0.4,1-1,1	s-1-0.4-1-1S26.4,12,27,12z M17,20c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S17.6,20,17,20z M27,26c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S27.6,26,27,26z" /><path d="M19,25H8.5c-3,0-5.5-2.5-5.5-5.5c0-2.7,1.9-4.9,4.5-5.4l1.3-0.2l0.3-1.3C9.9,8.7,13.2,6,17,6c0.5,0,1,0,1.5,0.1	c1.6,0.3,3,1.1,4.2,2.2l1.4-1.4c-1.4-1.4-3.2-2.4-5.2-2.7C18.3,4.1,17.6,4,17,4c-4.7,0-8.9,3.3-9.8,8.1C3.6,12.8,1,15.9,1,19.5	C1,23.6,4.3,27,8.5,27H19V25z" /></svg>`;
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
