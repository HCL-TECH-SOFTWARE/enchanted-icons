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

export const ICON_NAME = `${ICON_PREFIX}icon-user-activity`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25 23h-.0215a1.0016 1.0016 0 01-.94-.7256L20.8711 11.19l-1.9346 5.1607A1.0005 1.0005 0 0118 17H14V15h3.3066l2.7569-7.3511a1.0005 1.0005 0 011.8984.0762l3.1113 10.8921 1.9786-5.9336A.9988.9988 0 0128 12h4v2H28.7207l-2.7725 8.3164A.9984.9984 0 0125 23zM15 30H13V23a3.0033 3.0033 0 00-3-3H6a3.0033 3.0033 0 00-3 3v7H1V23a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM8 8a3 3 0 11-3 3A3 3 0 018 8M8 6a5 5 0 105 5A5 5 0 008 6z" /></svg>`;
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
