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

export const ICON_NAME = `${ICON_PREFIX}icon-data-class`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,16a3.9612,3.9612,0,0,0-2.02.5657l-2.8586-2.8585,2.293-2.293a2,2,0,0,0,0-2.8284l-6-6a2,2,0,0,0-2.8284,0l-6,6a2,2,0,0,0,0,2.8284l2.293,2.293L8.02,16.5657A4.043,4.043,0,1,0,9.4343,17.98l2.8585-2.8586,2.293,2.293A1.9773,1.9773,0,0,0,15,17.7233V22H12v8h8V22H17V17.7233a1.9773,1.9773,0,0,0,.4142-.3091l2.293-2.293L22.5657,17.98A3.9885,3.9885,0,1,0,26,16ZM8,20a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,8,20Zm10,4v4H14V24h4Zm-2-8-6-6,6-6,6,6Zm10,6a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,22Z" /></svg>`;
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
