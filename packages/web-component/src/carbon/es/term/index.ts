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
      d: 'M28,26H25V24h3V8H25V6h3a2.0023,2.0023,0,0,1,2,2V24A2.0027,2.0027,0,0,1,28,26Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '23',
      cy: '16',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '16',
      r: '2'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '16',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7,26H4a2.0023,2.0023,0,0,1-2-2V8A2.002,2.002,0,0,1,4,6H7V8H4V24H7Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-term`;
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
