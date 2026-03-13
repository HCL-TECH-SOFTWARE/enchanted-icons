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

export const ICON_NAME = `${ICON_PREFIX}icon-partition-auto`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26 19c-2.2056 0-4 1.7944-4 4 0 .6836.1882 1.3174.4917 1.8809-1.8762 1.3726-4.146 2.1191-6.4917 2.1191-6.0654 0-11-4.9346-11-11h-2c0 7.168 5.8318 13 13 13 2.8455 0 5.5923-.936 7.8433-2.6416.6235.4019 1.3613.6416 2.1567.6416 2.2056 0 4-1.7944 4-4s-1.7944-4-4-4zm0 6c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2zM16 3c-2.8455 0-5.5923.936-7.8433 2.6416-.6235-.4019-1.3613-.6416-2.1567-.6416-2.2056 0-4 1.7944-4 4s1.7944 4 4 4 4-1.7944 4-4c0-.6836-.1882-1.3174-.4917-1.8809 1.8762-1.3726 4.146-2.1191 6.4917-2.1191 6.0654 0 11 4.9346 11 11h2c0-7.168-5.8318-13-13-13zM6 11c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2z" /></svg>`;
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
