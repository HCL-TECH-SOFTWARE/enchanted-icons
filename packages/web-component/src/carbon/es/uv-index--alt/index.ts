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
      d: 'M13 30H9a2.0027 2.0027 0 01-2-2V20H9v8h4V20h2v8A2.0027 2.0027 0 0113 30zM25 20L23.25 20 21 29.031 18.792 20 17 20 19.5 30 22.5 30 25 20zM15 2H17V7H15z'
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
      d: 'M25 15H30V17H25zM2 15H7V17H2z'
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
      d: 'M22,17H20V16a4,4,0,0,0-8,0v1H10V16a6,6,0,0,1,12,0Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-uv-index-alt`;
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
