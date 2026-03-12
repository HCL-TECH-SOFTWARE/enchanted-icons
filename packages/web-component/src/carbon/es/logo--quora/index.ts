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
      d: 'M29,23.86H27a1.72,1.72,0,0,1-1.73,1.72c-1.15,0-1.82-.86-2.58-2a11,11,0,0,0,4.79-9.1c.09-7.19-5.85-11.89-12.17-11.89S3,7.37,3,14.37,9,26.16,15.17,26.16a10.71,10.71,0,0,0,3.07-.48c1.15,2.11,2.59,3.74,5.46,3.74A5,5,0,0,0,29,23.86Zm-8.14-3.45a6.31,6.31,0,0,0-5.56-3.16,6,6,0,0,0-3.74,1.15L12.2,20a2.56,2.56,0,0,1,.86-.1c1.82,0,3,1.53,4.12,3.64a7.58,7.58,0,0,1-1.91.19C10.86,23.76,9,20.6,9,14.47s1.91-9.3,6.23-9.3,6.32,3.16,6.32,9.3A20.68,20.68,0,0,1,20.83,20.41Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-logo-quora`;
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
