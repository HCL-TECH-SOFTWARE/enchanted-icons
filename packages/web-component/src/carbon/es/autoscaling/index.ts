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
      d: 'M22,28H12V26H22V10H6V20H4V10A2.0021,2.0021,0,0,1,6,8H22a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,22,28Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,22H26V20h2V4H12V6H10V4a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2V20A2.0021,2.0021,0,0,1,28,22Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M10 14L10 16 14.586 16 3 27.586 4.414 29 16 17.414 16 22 18 22 18 14 10 14z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-autoscaling`;
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
