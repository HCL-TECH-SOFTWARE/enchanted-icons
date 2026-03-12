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
      d: 'M6,30H26a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v6A2,2,0,0,0,6,30Zm0-8H26v6H6Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '25',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '14.5',
      r: '1.5'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M10.7832,10.3325a7.0007,7.0007,0,0,1,10.4341,0l-1.49,1.334a5,5,0,0,0-7.4537,0Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.1992,7.3994a11.0019,11.0019,0,0,1,17.6006,0L23.2,8.6a9.0009,9.0009,0,0,0-14.4014.0005Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-wifi-controller`;
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
