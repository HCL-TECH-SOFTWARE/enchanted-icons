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
      cx: '8',
      cy: '16',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '14',
      cy: '8',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '28',
      cy: '12',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '21',
      cy: '18',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M30,3.4141,28.5859,2,4,26.5859V2H2V28a2,2,0,0,0,2,2H30V28H5.4141ZM4,28Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-covariate`;
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
