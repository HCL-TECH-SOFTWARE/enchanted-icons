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
      d: 'M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '25',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M13 4H15V12H13zM9 4H11V12H9zM21 12H19a2.0021 2.0021 0 01-2-2V6a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0121 12zM19 6v4h2V6zM21 14H23V22H21zM9 14H11V22H9zM17 22H15a2.0021 2.0021 0 01-2-2V16a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0117 22zm-2-6v4h2V16z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-image-service`;
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
