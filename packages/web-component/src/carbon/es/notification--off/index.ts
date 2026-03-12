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
      d: 'M26 16.5859V13a9.9217 9.9217 0 00-1.0833-4.5024L30 3.4141 28.5859 2 2 28.5859 3.4141 30l6-6H11v1a5 5 0 0010 0V24h7a1 1 0 001-1V20a1 1 0 00-.293-.707zM19 25a3 3 0 01-6 0V24h6zm8-3H11.4141L23.4119 10.0024A7.949 7.949 0 0124 13v4a1 1 0 00.293.707L27 20.4141zM7.707 17.707A1 1 0 008 17V13a8.0092 8.0092 0 018-8 7.9253 7.9253 0 014.9857 1.7681l1.4264-1.4263A9.934 9.934 0 0017 3.0508V1H15V3.0508A10.0136 10.0136 0 006 13v3.5859l-3 3L4.4141 21z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-notification-off`;
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
