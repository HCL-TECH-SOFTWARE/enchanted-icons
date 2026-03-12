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
      d: 'M20,2H12A9.9842,9.9842,0,0,0,7.0349,20.6553C7.0249,20.7705,7,20.8818,7,21a3.9929,3.9929,0,0,0,2.9106,3.83A4.0049,4.0049,0,0,1,6,28H4v2H6a6.0044,6.0044,0,0,0,5.928-5.12,3.9966,3.9966,0,0,0,2.93-2.88H20A10,10,0,0,0,20,2ZM11,23a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,11,23Zm9-3H14.8579a3.9841,3.9841,0,0,0-7.15-1.2637A7.99,7.99,0,0,1,12,4h8a8,8,0,0,1,0,16Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-lasso`;
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
