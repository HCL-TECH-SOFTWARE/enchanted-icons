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
      d: 'M30 3.4141L28.5859 2 2 28.5859 3.4141 30l2-2H26a2.0027 2.0027 0 002-2V5.4141zM26 26H7.4141l7.7929-7.793 2.3788 2.3787a2 2 0 002.8284 0L22 19l4 3.9973zm0-5.8318l-2.5858-2.5859a2 2 0 00-2.8284 0L19 19.1682l-2.377-2.3771L26 7.4141zM6 22V19l5-4.9966 1.3733 1.3733 1.4159-1.416-1.375-1.375a2 2 0 00-2.8284 0L6 16.1716V6H22V4H6A2.002 2.002 0 004 6V22z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-no-image`;
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
