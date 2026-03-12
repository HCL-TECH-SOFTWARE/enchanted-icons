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
      d: 'M10 24H12V30H10z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21,20H7a3.0033,3.0033,0,0,1-3-3V6H2V17a5.0059,5.0059,0,0,0,5,5H21a4.9419,4.9419,0,0,1,2.105.481L17,28.5859,18.4141,30l6.3071-6.3071A4.96,4.96,0,0,1,26,27v3h2V27A7.0078,7.0078,0,0,0,21,20Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M25.2746,4.0386l-7-2a1.0013,1.0013,0,0,0-.55,0l-7,2A.9993.9993,0,0,0,10.03,5.2422L11,9.123V11A7,7,0,1,0,25,11V9.123l.97-3.8808A.9993.9993,0,0,0,25.2746,4.0386ZM18,4.04l5.7952,1.6558L23.219,8H19V6H17V8H12.781l-.5762-2.3042ZM18,16a5.0058,5.0058,0,0,1-5-5V10H23v1A5.0058,5.0058,0,0,1,18,16Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-police`;
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
