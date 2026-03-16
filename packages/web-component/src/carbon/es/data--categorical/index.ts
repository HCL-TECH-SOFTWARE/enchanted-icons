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

export const ICON_NAME = `${ICON_PREFIX}icon-data-categorical`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0 (see NOTICE for details).
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29 30h-10c-.5522 0-1-.4478-1-1v-10c0-.5522.4478-1 1-1h10c.5522 0 1 .4478 1 1v10c0 .5522-.4478 1-1 1zm-9-2h8v-8h-8v8zM8 30c-3.3083 0-6-2.6917-6-6s2.6917-6 6-6 6 2.6917 6 6-2.6917 6-6 6zm0-10c-2.2056 0-4 1.7944-4 4s1.7944 4 4 4 4-1.7944 4-4-1.7944-4-4-4zM22 14h-12c-.3604 0-.6926-.1938-.8701-.5073s-.1729-.6982.0127-1.0072L15.1446 2.4822c.1937-.3229.5246-.4822.8554-.4822s.6617.1593.8554.4822l6.002 10.0033c.1855.309.1902.6937.0127 1.0072s-.5098.5073-.8701.5073zm-10.2339-2h8.4678l-4.2339-7.0564-4.2339 7.0564z" /></svg>`;
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
