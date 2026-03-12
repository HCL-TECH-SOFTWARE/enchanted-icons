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
      d: 'M2 26H5a3 3 0 00-3-3zM9 26H7a5.0057 5.0057 0 00-5-5V19A7.0078 7.0078 0 019 26z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M13,26H11a9.01,9.01,0,0,0-9-9V15A11.0125,11.0125,0,0,1,13,26Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28,26H15V24H28V8H4v5H2V8A2.0021,2.0021,0,0,1,4,6H28a2.0021,2.0021,0,0,1,2,2V24A2.0021,2.0021,0,0,1,28,26Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-media-cast`;
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
