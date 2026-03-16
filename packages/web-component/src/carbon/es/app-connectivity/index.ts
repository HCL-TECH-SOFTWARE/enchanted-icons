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

export const ICON_NAME = `${ICON_PREFIX}icon-app-connectivity`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,14h8a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2H9A2.0023,2.0023,0,0,0,7,6v4H4a2.0023,2.0023,0,0,0-2,2v8a2.0023,2.0023,0,0,0,2,2H6v4a2.0023,2.0023,0,0,0,2,2H18a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V20a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2v6H8V22h4a2.0023,2.0023,0,0,0,2-2V12a2.0023,2.0023,0,0,0-2-2H9V6h9v6A2.0023,2.0023,0,0,0,20,14Zm0,14V24h8v4Zm8-8,0,2H20V20ZM4,20V16h8v4Zm8.0005-6H4V12h8ZM20,12V8h8v4Zm8-8,0,2H20V4Z" /></svg>`;
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
