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

export const ICON_NAME = `${ICON_PREFIX}icon-earth-europe-africa-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4,16A11.9814,11.9814,0,0,1,9,6.2734V9a1,1,0,0,0,1,1h3.3821a1,1,0,0,0,.8943-.5527L15,8h4v6H13.2361a1.0006,1.0006,0,0,0-.4473.1055L9.5527,15.7236A1,1,0,0,0,9,16.6182v3.7046a1,1,0,0,0,.6287.9287L14,23l.8235,4.94A12.0152,12.0152,0,0,1,4,16ZM22,26.376V23l1.7546-2.6318a1.0012,1.0012,0,0,0,.1382-.7974L23,16V13h4.605A11.901,11.901,0,0,1,22,26.376Z" /></svg>`;
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
