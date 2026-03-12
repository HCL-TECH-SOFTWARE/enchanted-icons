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
      d: 'M17 28L17 22 15 22 15 28 5 28 5 30 27 30 27 28 17 28z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '16',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,20H6a2.0023,2.0023,0,0,1-2-2V14a2.0023,2.0023,0,0,1,2-2H26a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,26,20ZM6,14v4H26V14Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '6',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,10H6A2.0023,2.0023,0,0,1,4,8V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V8A2.0023,2.0023,0,0,1,26,10ZM6,4V8H26V4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-bare-metal-server-02`;
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
