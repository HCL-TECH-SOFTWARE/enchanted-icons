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
      d: 'M28,10H23V6a2.0023,2.0023,0,0,0-2-2H11A2.0023,2.0023,0,0,0,9,6v4H4a2.0023,2.0023,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V12A2.0023,2.0023,0,0,0,28,10ZM4,28V12H9v2H7v2H9v2H7v2H9v2H7v2H9v4Zm17,0H11V6H21Zm7,0H23V24h2V22H23V20h2V18H23V16h2V14H23V12h5Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M14 8H18V10H14zM14 12H18V14H14zM14 16H18V18H14z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-center`;
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
