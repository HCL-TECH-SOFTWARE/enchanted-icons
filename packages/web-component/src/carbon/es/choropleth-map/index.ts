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
      d: 'M29.2427,4.03l-8-2a1.0065,1.0065,0,0,0-.6143.0415l-9.7,3.88L3.2427,4.03A1,1,0,0,0,2,5V27a1,1,0,0,0,.7573.97l8,2A1.0244,1.0244,0,0,0,11,30a.9953.9953,0,0,0,.3716-.0718l9.7-3.88,7.686,1.9219A1,1,0,0,0,30,27V5A1,1,0,0,0,29.2427,4.03ZM28,11H22V4.2806l6,1.5ZM10,19H4V13h6Zm2-8V7.6771l8-3.2V11Zm8,2v6H12V13Zm-8,8h8v3.3227l-8,3.2Zm10-8h6v6H22ZM10,7.7806V11H4V6.2806ZM4,21h6v6.7192l-6-1.5Zm18,3.2187V21h6v4.7192Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-choropleth-map`;
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
