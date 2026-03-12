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
      d: 'M24 26H26V28H24z',
      transform: 'rotate(-90 25 27)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M18 22H20V24H18z',
      transform: 'rotate(-90 19 23)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M18 30L22 30 22 28 20 28 20 26 18 26 18 30z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M25 23H29V25H25z',
      transform: 'rotate(-90 27 24)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28 26L30 26 30 30 26 30 26 28 28 28 28 26zM26 20L26 18 30 18 30 22 28 22 28 20 26 20zM24 20L22 20 22 24 20 24 20 26 24 26 24 20z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 17H21V21H19z',
      transform: 'rotate(-90 20 19)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6 22H10V26H6z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M14 30H2V18H14zM4 28h8V20H4zM22 6H26V10H22z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M30 14H18V2H30zM20 12h8V4H20zM6 6H10V10H6z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M14,14H2V2H14ZM4,12h8V4H4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-qr-code`;
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
