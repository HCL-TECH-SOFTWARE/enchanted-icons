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
      d: 'M28,30H20V24a2.002,2.002,0,0,1,2-2h4V18H20V16h6a2.0023,2.0023,0,0,1,2,2v4a2.0023,2.0023,0,0,1-2,2H22v4h6Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M4.479 15.5H26.521V17.5H4.479z',
      transform: 'rotate(-45 15.5 16.5)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M4.5 15.5L4.5 14.5 7.5 14.5 7.5 3.5 4.5 3.5 4.5 2.5 8.5 2.5 8.5 14.5 11.5 14.5 11.5 15.5 4.5 15.5z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8,3V15H8V3M9,2H4V4H7V14H4v2h8V14H9V2Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-character-fraction`;
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
