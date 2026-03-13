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

export const ICON_NAME = `${ICON_PREFIX}icon-image-copy`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4 22H2V4A2.0023 2.0023 0 014 2H22V4H4zM21 17a3 3 0 10-3-3A3.0033 3.0033 0 0021 17zm0-4a1 1 0 11-1 1A1.0009 1.0009 0 0121 13z" /><path d="M28,7H9A2.0025,2.0025,0,0,0,7,9V28a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V9A2.0025,2.0025,0,0,0,28,7Zm0,21H9v-6l4-3.9971,5.5859,5.586a2,2,0,0,0,2.8282,0L23,22.0034,28,27Zm0-3.8281-3.5859-3.586a2,2,0,0,0-2.8282,0L20,22.1719l-5.5859-5.586a2,2,0,0,0-2.8282,0L9,19.1719V9H28Z" /></svg>`;
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
