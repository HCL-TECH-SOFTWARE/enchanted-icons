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

export const ICON_NAME = `${ICON_PREFIX}icon-version-major`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18.5859 17.4141L16 14.8345 16 14.8345 13.4125 17.4156 12 16 16 12 20 16 18.5859 17.4141zM18.5859 11.4141L16 8.8345 16 8.8345 13.4125 11.4156 12 10 16 6 20 10 18.5859 11.4141zM18.5859 23.4141L16 20.8345 16 20.8345 13.4125 23.4156 12 22 16 18 20 22 18.5859 23.4141z" /><path d="m1.5858,17.4142c-.3905-.3905-.5858-.9024-.5858-1.4142s.1953-1.0237.5858-1.4142L14.5858,1.5858c.3905-.3905.9023-.5858,1.4142-.5858s1.0237.1953,1.4142.5858l13,13c.3905.3905.5858.9024.5858,1.4142s-.1953,1.0237-.5858,1.4142l-13,13c-.3905.3905-.9024.5858-1.4142.5858s-1.0237-.1953-1.4142-.5858L1.5858,17.4142ZM16,3L3,16l13,13,13-13L16,3Z" /></svg>`;
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
