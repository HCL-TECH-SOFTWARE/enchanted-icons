/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
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

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M18 22L19.414 20.586L23 24.172V4H25V24.172L28.586 20.586L30 22L24 28L18 22Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16 6H2V8H16V6Z',
      fill: 'currentColor',
      stroke: 'none'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M12 12H2V14H12V12Z',
      fill: 'currentColor',
      stroke: 'none'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8 18H2V20H8V18Z',
      fill: 'currentColor',
      stroke: 'none'
    }
  }
];

export const ICON_NAME = 'icon-sort-descending-alt';
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