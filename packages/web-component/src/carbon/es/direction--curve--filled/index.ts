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

export const ICON_NAME = `${ICON_PREFIX}icon-direction-curve-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z" /><path fill="none" d="M22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z" data-icon-path="inner-path" /></svg>`;
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
