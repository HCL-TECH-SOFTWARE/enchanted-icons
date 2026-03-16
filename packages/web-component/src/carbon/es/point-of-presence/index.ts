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

export const ICON_NAME = `${ICON_PREFIX}icon-point-of-presence`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 30H18a2.0021 2.0021 0 01-2-2V18a2.0021 2.0021 0 012-2h2v2H18V28H28V18H26V16h2a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30zM14 16H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H14a2.0021 2.0021 0 012 2V6H14V4H4V14H14V12h2v2A2.0021 2.0021 0 0114 16z" /><path d="M26,9a2.9926,2.9926,0,0,0-5.8157-1H9v2H20.1843A2.9939,2.9939,0,0,0,22,11.8154V23h2V11.8159A2.9958,2.9958,0,0,0,26,9Zm-3,1a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,23,10Z" /></svg>`;
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
