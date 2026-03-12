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
      cx: '10.5',
      cy: '24.5',
      r: '1.5'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19.5 14.964H21.5V20.035H19.5z',
      transform: 'rotate(-45 20.5 17.5)'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '13',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,6a7,7,0,0,0,0,14V18a5,5,0,1,1,5-5h2A7,7,0,0,0,16,6Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,2H6A2,2,0,0,0,4,4V28a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H6V4H26Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-vmdk-disk`;
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
