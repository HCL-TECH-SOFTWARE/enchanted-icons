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
      d: 'M15 2H17V7H15z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21.668 6.854H26.625999999999998V8.854H21.668z',
      transform: 'rotate(-45 24.147 7.853)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M25 15H30V17H25z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.147 21.668H25.147V26.625999999999998H23.147z',
      transform: 'rotate(-45 24.147 24.146)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15 25H17V30H15z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M5.375 23.147H10.333V25.147H5.375z',
      transform: 'rotate(-45 7.853 24.146)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M2 15H7V17H2z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6.854 5.375H8.854V10.333H6.854z',
      transform: 'rotate(-45 7.854 7.853)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,10a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-light-filled`;
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
