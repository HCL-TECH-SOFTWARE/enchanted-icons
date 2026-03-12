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
      d: 'M4 21H2v3a2.0059 2.0059 0 002 2H7V24H4zM4 8H7V6H4A2.0059 2.0059 0 002 8v3H4zM17 6H23V8H17zM9 6H15V8H9zM17 24H23V26H17zM28 15L4 15 4 13 2 13 2 19 4 19 4 17 28 17 28 19 30 19 30 13 28 13 28 15zM28 24H25v2h3a2.0059 2.0059 0 002-2V21H28zM28 6H25V8h3v3h2V8A2.0059 2.0059 0 0028 6zM9 24H15V26H9z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '12',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '20',
      r: '1'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-storage-request`;
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
