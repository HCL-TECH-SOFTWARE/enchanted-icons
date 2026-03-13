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

export const ICON_NAME = `${ICON_PREFIX}icon-train`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,3H11A5.0057,5.0057,0,0,0,6,8V20a4.99,4.99,0,0,0,3.582,4.77L7.7693,29H9.9451l1.7143-4h8.6812l1.7143,4h2.1758L22.418,24.77A4.99,4.99,0,0,0,26,20V8A5.0057,5.0057,0,0,0,21,3ZM11,5H21a2.9948,2.9948,0,0,1,2.8157,2H8.1843A2.9948,2.9948,0,0,1,11,5ZM24,19H21v2h2.8157A2.9948,2.9948,0,0,1,21,23H11a2.9948,2.9948,0,0,1-2.8157-2H11V19H8V17H24Zm0-4H8V9H24Z" /></svg>`;
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
