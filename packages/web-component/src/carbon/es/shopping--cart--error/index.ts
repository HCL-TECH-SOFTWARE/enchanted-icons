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
    elem: 'circle',
    attrs: {
      cx: '10',
      cy: '28',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '24',
      cy: '28',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M4.9806,2.8039A1,1,0,0,0,4,2H0V4H3.18L7.0194,23.1961A1,1,0,0,0,8,24H26V22H8.82l-.8-4H26a1,1,0,0,0,.9762-.783L29.2445,7H27.1971l-1.9989,9H7.62Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M17,2a6,6,0,1,0,6,6A6.0066,6.0066,0,0,0,17,2Zm0,2a3.9521,3.9521,0,0,1,2.019.5669L13.5669,10.019A3.9529,3.9529,0,0,1,13,8,4.0045,4.0045,0,0,1,17,4Zm0,8a3.9521,3.9521,0,0,1-2.019-.5669L20.4331,5.981A3.9529,3.9529,0,0,1,21,8,4.0045,4.0045,0,0,1,17,12Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-shopping-cart-error`;
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
