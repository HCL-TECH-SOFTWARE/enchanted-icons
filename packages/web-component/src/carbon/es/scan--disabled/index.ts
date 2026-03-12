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
      d: 'M29.3826 2.0762a.9993.9993 0 00-1.09.2168l-26 26A1 1 0 003 30h8V28H5.4143l4-4H22a2.0021 2.0021 0 002-2V9.4146l4-4V11h2V3A1 1 0 0029.3826 2.0762zM22 22H11.4143L22 11.4146zM10 17.7554V10h7.7554l2-2H10a2.0025 2.0025 0 00-2 2v9.7554zM11 2L2 2 2 11 4 11 4 4 11 4 11 2zM21 30L30 30 30 21 28 21 28 28 21 28 21 30zM4 23.755L4 21 2 21 2 25.754 4 23.755zM25.755 2L21 2 21 4 23.755 4 25.755 2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-scan-disabled`;
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
