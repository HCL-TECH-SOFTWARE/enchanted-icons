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
      d: 'M28 22v-3c0-2.2-1.8-4-4-4s-4 1.8-4 4v3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5C30 22.9 29.1 22 28 22zM22 19c0-1.1.9-2 2-2s2 .9 2 2v3h-4V19zM20 29v-5h8v5H20zM8 16H14V18H8zM8 10H20V12H8z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v13c0,4.1,2.2,7.8,5.8,9.7l5.2,2.8v-2.3l-4.2-2.3C5.8,23.4,4,20.3,4,17V4h20v8h2V4z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-rule-locked`;
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
