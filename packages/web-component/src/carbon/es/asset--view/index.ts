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
      cx: '22',
      cy: '24',
      r: '2'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M29.7769 23.4785A8.64 8.64 0 0022 18a8.64 8.64 0 00-7.7769 5.4785L14 24l.2231.5215A8.64 8.64 0 0022 30a8.64 8.64 0 007.7769-5.4785L30 24zM22 28a4 4 0 114-4A4.0045 4.0045 0 0122 28zM12 24a4 4 0 112.981-6.667l-1.49 1.334A2 2 0 1012 22z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,2a3.86,3.86,0,0,0-1.85.48L7.76,10.96A9.99,9.99,0,0,0,12,30V28a8,8,0,1,1,5.63-13.68l1.4-1.4a10.0059,10.0059,0,0,0-5.39-2.77l8.38-4.34c0,.06-.02.12-.02.19a3.9989,3.9989,0,0,0,4,4c.06,0,.12-.02.19-.02L23.07,16h2.24l4.25-8.21A3.9727,3.9727,0,0,0,26,2Zm0,6a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,26,8Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-asset-view`;
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
