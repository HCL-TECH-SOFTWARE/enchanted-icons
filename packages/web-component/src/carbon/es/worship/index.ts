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
      d: 'M26.5859,17,22,21.5859v0h0l-5-5a2.002,2.002,0,0,0-2.8286,0L9.585,21.1709A2.0031,2.0031,0,0,0,9.585,24l4.0009,4H6v2H16a1,1,0,0,0,.707-1.707L11,22.585,15.5852,18l5.7078,5.707a.9995.9995,0,0,0,1.414,0L28,18.4141Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21.5,17A3.5,3.5,0,1,1,25,13.5,3.5042,3.5042,0,0,1,21.5,17Zm0-5A1.5,1.5,0,1,0,23,13.5,1.5017,1.5017,0,0,0,21.5,12Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M4,10.5977l12-6.462,12.5264,6.7452.9472-1.7618-13-7a1.0045,1.0045,0,0,0-.9472,0l-13,7A1,1,0,0,0,2,10V30H4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-worship`;
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
