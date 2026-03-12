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
      d: 'M15 2H17V6.96H15z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21.67 6.85H26.630000000000003V8.85H21.67z',
      transform: 'rotate(-45 24.142 7.85)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M25.04 15H30V17H25.04z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.15 21.67H25.15V26.630000000000003H23.15z',
      transform: 'rotate(-45 24.152 24.146)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15 25.04H17V30H15z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M5.37 23.15H10.33V25.15H5.37z',
      transform: 'rotate(-45 7.86 24.144)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M2 15H6.96V17H2z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6.85 5.37H8.85V10.33H6.85z',
      transform: 'rotate(-45 7.85 7.848)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,12a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-awake`;
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
