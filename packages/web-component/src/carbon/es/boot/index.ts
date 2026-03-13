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

export const ICON_NAME = `${ICON_PREFIX}icon-boot`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24,17H18a1.0008,1.0008,0,0,1-1-1V4a2.0025,2.0025,0,0,0-2-2H5A2.0025,2.0025,0,0,0,3,4V28a2.0025,2.0025,0,0,0,2,2H27a2.0025,2.0025,0,0,0,2-2V22A5.0057,5.0057,0,0,0,24,17Zm3,5v2H23V19h1A3.0033,3.0033,0,0,1,27,22ZM15,4V6H11V8h4v2H11v2h4v2H11v2h4a3.0033,3.0033,0,0,0,3,3h3v5H14.1624l-3-1H5V4ZM25,28V27H23v1H21V27H19v1H17V27H15v1H13V27H11v1H5V25h5.8376l3,1H27v2Z" /></svg>`;
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
