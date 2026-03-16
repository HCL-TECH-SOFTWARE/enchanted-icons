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

export const ICON_NAME = `${ICON_PREFIX}icon-help-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.27.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,23a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,25Zm1.1421-7.754v2.5014h-2.25V15h2.125a2.3763,2.3763,0,0,0,0-4.7526h-1.5a2.3777,2.3777,0,0,0-2.375,2.375V13.26h-2.25v-.6377A4.6279,4.6279,0,0,1,15.5171,8h1.5a4.6238,4.6238,0,0,1,.125,9.246Z" /><path fill="none" d="M16,25a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,25Zm1.1421-7.754v2.5014h-2.25V15h2.125a2.3763,2.3763,0,0,0,0-4.7526h-1.5a2.3777,2.3777,0,0,0-2.375,2.375V13.26h-2.25v-.6377A4.6279,4.6279,0,0,1,15.5171,8h1.5a4.6238,4.6238,0,0,1,.125,9.246Z" data-icon-path="inner-path" /></svg>`;
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
