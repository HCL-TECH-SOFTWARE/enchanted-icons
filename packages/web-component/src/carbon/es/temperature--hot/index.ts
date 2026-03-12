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
      d: 'M26 13H30V15H26z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.121 5.879H27.121V7.879H23.121z',
      transform: 'rotate(-45 25.121 6.879)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M24.121 19.121H26.121V23.121H24.121z',
      transform: 'rotate(-45 25.121 21.121)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M17 2H19V6H17zM18 8a6.0365 6.0365 0 00-1 .09v2.0518A3.9567 3.9567 0 0118 10a4 4 0 010 8v2A6 6 0 0018 8zM10 20.1839V7H8V20.1839a3 3 0 102 0z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-temperature-hot`;
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
