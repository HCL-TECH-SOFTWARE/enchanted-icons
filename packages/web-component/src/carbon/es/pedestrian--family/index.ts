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

export const ICON_NAME = `${ICON_PREFIX}icon-pedestrian-family`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20 30H17a2.0021 2.0021 0 01-2-2V23h2v5h3V23h2V19a1.0011 1.0011 0 00-1-1H12.2793l-2-6H4a1.0011 1.0011 0 00-1 1v6H5v9H9V21h2v7a2.0021 2.0021 0 01-2 2H5a2.0021 2.0021 0 01-2-2V21a2.0021 2.0021 0 01-2-2V13a3.0033 3.0033 0 013-3h6.2793a1.998 1.998 0 011.8975 1.3674L13.7207 16H21a3.0033 3.0033 0 013 3v4a2.0021 2.0021 0 01-2 2v3A2.0021 2.0021 0 0120 30zM28 30H26V19h3V13a1.0011 1.0011 0 00-1-1H24V10h4a3.0033 3.0033 0 013 3v6a2.0021 2.0021 0 01-2 2H28zM7 9a4 4 0 114-4A4.0045 4.0045 0 017 9zM7 3A2 2 0 109 5 2.0021 2.0021 0 007 3zM25 9a4 4 0 114-4A4.0045 4.0045 0 0125 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0025 3z" /><path d="M18.5,15A3.5,3.5,0,1,1,22,11.5,3.5041,3.5041,0,0,1,18.5,15Zm0-5A1.5,1.5,0,1,0,20,11.5,1.5017,1.5017,0,0,0,18.5,10Z" /></svg>`;
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
