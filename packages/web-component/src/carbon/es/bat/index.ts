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
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';
import { ICON_PREFIX } from '../../../utils/tags';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  fill: 'currentColor',
  width: 32,
  height: 32
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M31.9093,6.584A1,1,0,0,0,31,6c-4.7683,0-8.2607.8887-11,2.8438V3H18V6H14V3H12V8.8438C9.2608,6.8887,5.7684,6,1,6A1,1,0,0,0,.2437,7.6543C1.9454,9.6221,3,11.7041,3,16a1,1,0,0,0,1,1c2.7678,0,6,1.31,6,5a1.004,1.004,0,0,0,.9341.998C11.35,23.0273,15,23.3872,15,27a1,1,0,0,0,2,0c0-3.6128,3.65-3.9727,4.0622-4.002A1,1,0,0,0,22,22c0-3.69,3.2321-5,6-5a1,1,0,0,0,1-1c0-4.2959,1.0547-6.3779,2.7564-8.3457A1,1,0,0,0,31.9093,6.584Zm-4.893,8.46c-3.3857.3081-6.5534,2.229-6.97,6.0786A6.552,6.552,0,0,0,16,23.6094a6.552,6.552,0,0,0-4.0461-2.4864c-.4168-3.85-3.5845-5.7705-6.97-6.0786a13.2017,13.2017,0,0,0-1.9387-6.98c4.1318.2724,7.0327,1.4277,9.248,3.6425A1,1,0,0,0,14,11V8h4v3a1,1,0,0,0,1.707.707c2.2153-2.2148,5.1162-3.37,9.248-3.6425A13.2017,13.2017,0,0,0,27.0163,15.0444Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-bat`;
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`${createSvgIcon(content, attrs)}`;
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
