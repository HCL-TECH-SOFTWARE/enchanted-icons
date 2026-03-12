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
      d: 'M21 16H23V18H21zM9 16H17V18H9zM21 12H23V14H21zM9 12H17V14H9zM9 8H23V10H9z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M25,2H7A2.002,2.002,0,0,0,5,4V29a1,1,0,0,0,1,1H7a.9987.9987,0,0,0,.8-.4L10,26.667,12.2,29.6a1.0353,1.0353,0,0,0,1.6,0L16,26.667,18.2,29.6a1.0353,1.0353,0,0,0,1.6,0L22,26.667,24.2,29.6a.9993.9993,0,0,0,.8.4h1a1,1,0,0,0,1-1V4A2.0023,2.0023,0,0,0,25,2Zm0,25.333L22.8,24.4a1.0353,1.0353,0,0,0-1.6,0L19,27.333,16.8,24.4a1.0353,1.0353,0,0,0-1.6,0L13,27.333,10.8,24.4a1.0353,1.0353,0,0,0-1.6,0L7,27.333V4H25Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-receipt`;
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
