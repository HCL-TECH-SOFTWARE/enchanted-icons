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

export const ICON_NAME = `${ICON_PREFIX}icon-pills`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,14a7.94,7.94,0,0,0-4,1.0825V9A7,7,0,0,0,4,9V23a6.999,6.999,0,0,0,12.2855,4.5878A7.9969,7.9969,0,1,0,22,14Zm0,2a6.0046,6.0046,0,0,1,5.91,5H16.09A6.0046,6.0046,0,0,1,22,16ZM6,9A5,5,0,0,1,16,9v6H6Zm5,19a5.0059,5.0059,0,0,1-5-5V17h9.765a7.9566,7.9566,0,0,0-.7242,8.9315A4.9885,4.9885,0,0,1,11,28Zm11,0a6.0046,6.0046,0,0,1-5.91-5H27.91A6.0046,6.0046,0,0,1,22,28Z" /></svg>`;
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
