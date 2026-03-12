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
      d: 'M22 30H17a7.0078 7.0078 0 01-7-7 6.6832 6.6832 0 012.0244-4.6967A6.7935 6.7935 0 0010.0093 18C5.0425 18.0466 4 24.5513 4 30H2C2 18.4907 6.3452 16.0342 9.9907 16a10.0717 10.0717 0 014.4785 1.117 1 1 0 01.0616 1.73A4.8773 4.8773 0 0017 28h5zM17 8H19V16H17z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,5.4141,26.5859,4,24.3242,6.2617A9.95,9.95,0,0,0,19,4.0508V2H17V4.0508A10.0132,10.0132,0,0,0,8,14h2a8,8,0,1,1,8,8v2A9.9928,9.9928,0,0,0,25.7383,7.6758Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-wave-period`;
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
