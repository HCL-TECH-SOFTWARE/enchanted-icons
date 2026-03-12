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
      d: 'M28,4a2.0023,2.0023,0,0,0-2,2V8H24a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,20,5a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,16,8a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,12,5a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,8,8H6V6A2.0023,2.0023,0,0,0,4,4H2V6H4V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6h2V4ZM6,26V22h4V20H6V16h4V14H6V10H8a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,24,10h2V26Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-accumulation-rain`;
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
