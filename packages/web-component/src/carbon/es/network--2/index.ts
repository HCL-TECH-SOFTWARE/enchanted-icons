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
      d: 'M17,17h5.1421a4,4,0,1,0,0-2H17V7h5.1421a4,4,0,1,0,0-2H17a2.0023,2.0023,0,0,0-2,2v8H9.8579a4,4,0,1,0,0,2H15v8a2.0023,2.0023,0,0,0,2,2h5.1421a4,4,0,1,0,0-2H17Zm9-3a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,14ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM6,18a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,18Zm20,6a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,24Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-network-2`;
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
