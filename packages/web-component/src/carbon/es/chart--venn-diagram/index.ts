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
      d: 'M20,6a9.92,9.92,0,0,0-4,.84A9.92,9.92,0,0,0,12,6a10,10,0,0,0,0,20,9.92,9.92,0,0,0,4-.84A9.92,9.92,0,0,0,20,26,10,10,0,0,0,20,6ZM12,24A8,8,0,0,1,12,8a7.91,7.91,0,0,1,1.76.2,10,10,0,0,0,0,15.6A7.91,7.91,0,0,1,12,24Zm8-8a8,8,0,0,1-4,6.92A8,8,0,0,1,16,9.08,8,8,0,0,1,20,16Zm0,8a7.91,7.91,0,0,1-1.76-.2,10,10,0,0,0,0-15.6A7.91,7.91,0,0,1,20,8a8,8,0,0,1,0,16Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-chart-venn-diagram`;
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
