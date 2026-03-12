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
      d: 'M28.83,23.17,23,17.33V13a1,1,0,0,0-.29-.71l-10-10a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,0,1.42l10,10A1,1,0,0,0,13,23h4.34l5.83,5.84a4,4,0,0,0,5.66-5.66ZM6,10.41l2.29,2.3,1.42-1.42L7.41,9,9,7.41l4.29,4.3,1.42-1.42L10.41,6,12,4.41,18.59,11,11,18.59,4.41,12Zm21.41,17a2,2,0,0,1-2.82,0l-6.13-6.12a1.8,1.8,0,0,0-.71-.29H13.41l-1-1L20,12.41l1,1v4.34a1,1,0,0,0,.29.7l6.12,6.14a2,2,0,0,1,0,2.82Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-paint-brush`;
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
