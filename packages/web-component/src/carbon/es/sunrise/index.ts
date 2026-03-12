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
      d: 'M2 27H29.998V29H2zM16 20a4.0045 4.0045 0 014 4h2a6 6 0 00-12 0h2A4.0045 4.0045 0 0116 20zM25 22H30V24H25z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21.668 14.854H26.625999999999998V16.854H21.668z',
      transform: 'rotate(-45 24.146 15.854)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16 4L11 9 12.41 10.41 15 7.83 15 8 15 15 17 15 17 8 17 7.83 19.59 10.41 21 9 16 4z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6.854 13.374H8.854V18.332H6.854z',
      transform: 'rotate(-45 7.854 15.854)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M2 22H7V24H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-sunrise`;
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
