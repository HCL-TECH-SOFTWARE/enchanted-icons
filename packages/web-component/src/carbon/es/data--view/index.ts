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
      cx: '22',
      cy: '24',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '8',
      cy: '8',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '8',
      cy: '16',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '8',
      cy: '24',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M5,21h7V19H5V13H21v3h2V5a2,2,0,0,0-2-2H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2h7V27H5ZM5,5H21v6H5Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-view`;
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
