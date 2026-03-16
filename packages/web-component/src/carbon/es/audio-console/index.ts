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

export const ICON_NAME = `${ICON_PREFIX}icon-audio-console`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28 14H27V2H25V14H24a2.0019 2.0019 0 00-2 2v2a2.0023 2.0023 0 002 2h1V30h2V20h1a2.0027 2.0027 0 002-2V16A2.0023 2.0023 0 0028 14zm0 4H24V16h4zM18 6H17V2H15V6H14a2.0019 2.0019 0 00-2 2v2a2.0019 2.0019 0 002 2h1V30h2V12h1a2.002 2.002 0 002-2V8A2.002 2.002 0 0018 6zm0 4H14V8h4zM8 20H7V2H5V20H4a2.0023 2.0023 0 00-2 2v2a2.0023 2.0023 0 002 2H5v4H7V26H8a2.0023 2.0023 0 002-2V22A2.0023 2.0023 0 008 20zm0 4H4V22H8z" transform="translate(0 .005)" /></svg>`;
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
