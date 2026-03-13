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

export const ICON_NAME = `${ICON_PREFIX}icon-train-time`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path fill="none" d="M25.496 10.088L22.874 7.466 22.874 3 25.124 3 25.124 6.534 27.088 8.498 25.496 10.088z" /><path d="M24,1a6,6,0,1,0,6,6A6.0066,6.0066,0,0,0,24,1Zm1.4971,9.0884L22.875,7.4658V3h2.25V6.5342l1.9639,1.9634Z" /><path d="M6,16V10h9V8H6.1843A2.9948,2.9948,0,0,1,9,6h6V4H9A5.0057,5.0057,0,0,0,4,9V21a4.99,4.99,0,0,0,3.582,4.77L5.7693,30H7.9451l1.7143-4h8.6812l1.7143,4h2.1758L20.418,25.77A4.99,4.99,0,0,0,24,21V16Zm16,4H19v2h2.8157A2.9948,2.9948,0,0,1,19,24H9a2.9948,2.9948,0,0,1-2.8157-2H9V20H6V18H22Z" /></svg>`;
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
