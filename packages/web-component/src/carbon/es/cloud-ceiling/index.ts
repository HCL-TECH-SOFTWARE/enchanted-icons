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

export const ICON_NAME = `${ICON_PREFIX}icon-cloud-ceiling`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 28H11V30H2zM21 28H30V30H21zM17 26.167L17 17.832 19.586 20.414 21 19 16 14 11 19 12.413 20.415 15 17.832 15 26.167 12.413 23.584 11 25 16 30 21 25 19.586 23.586 17 26.167z" /><path d="M23,16H21V14h2a3,3,0,0,0,0-6c-.0938.0144-.1538.0219-.2153.0263l-.8037.0572L21.7544,7.31a5.9927,5.9927,0,0,0-11.1758-.8655l-.2832.5994-.8423-.0455A3.5008,3.5008,0,0,0,9.5,14H11v2H9.5A5.5,5.5,0,0,1,9.07,5.0166,7.9909,7.9909,0,0,1,23.42,6.0175,5,5,0,0,1,23,16Z" /></svg>`;
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
