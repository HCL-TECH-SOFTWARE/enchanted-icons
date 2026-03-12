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
      d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM8,18a2,2,0,1,1,2-2A2,2,0,0,1,8,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,24,18Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      fill: 'none',
      d: 'M10,16a2,2,0,1,1-2-2A2,2,0,0,1,10,16Zm6-2a2,2,0,1,0,2,2A2,2,0,0,0,16,14Zm8,0a2,2,0,1,0,2,2A2,2,0,0,0,24,14Z',
      'data-icon-path': 'inner-path'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-pending-filled`;
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
