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

export const ICON_NAME = `${ICON_PREFIX}icon-image-search-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10,16a5.9908,5.9908,0,0,0,9.4712,4.8853L24.5859,26,26,24.5859l-5.115-5.1147A5.997,5.997,0,1,0,10,16Zm2,0a4,4,0,1,1,4,4A4.0045,4.0045,0,0,1,12,16Z" /><path d="M29,7H22.54L20.83,4.45A.9946.9946,0,0,0,20,4H12a.9946.9946,0,0,0-.83.45L9.46,7H3A1.0031,1.0031,0,0,0,2,8V25a1.0031,1.0031,0,0,0,1,1h9V24H4V9h6a.9946.9946,0,0,0,.83-.45L12.54,6h6.92l1.71,2.55A.9946.9946,0,0,0,22,9h6V21h2V8A1.0031,1.0031,0,0,0,29,7Z" /></svg>`;
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
