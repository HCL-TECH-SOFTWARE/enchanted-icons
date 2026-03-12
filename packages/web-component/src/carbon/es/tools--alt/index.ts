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
      d: 'M23.1,16l6.3-6.3c0.8-0.8,0.8-2,0-2.8l-4.2-4.2c-0.8-0.8-2-0.8-2.8,0L16,8.9L9.7,2.6c-0.8-0.8-2-0.8-2.8,0L2.6,6.8\tc-0.8,0.8-0.8,2,0,2.8L8.9,16L2,22.9V30h7.1l6.9-6.9l6.3,6.3c0.8,0.8,2,0.8,2.8,0l4.2-4.2c0.8-0.8,0.8-2,0-2.8L23.1,16z M23.8,4\tL28,8.2l-6.3,6.3l-4.2-4.2L23.8,4z M8.2,28H4v-4.2l6.3-6.3l4.2,4.2L8.2,28z M23.8,28L4,8.2L8.2,4l3.5,3.5L9.6,9.6l1.4,1.4l2.1-2.1\tl4.2,4.2l-2.1,2.1l1.4,1.4l2.1-2.1l4.2,4.2L21,20.9l1.4,1.4l2.1-2.1l3.5,3.5L23.8,28z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-tools-alt`;
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
