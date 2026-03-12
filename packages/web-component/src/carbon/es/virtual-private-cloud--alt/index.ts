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
      d: 'M23.4141,22,10,8.5859V2H2v8H8.5859L22,23.4141V30h8V22ZM8,8H4V4H8ZM28,28H24V24h4Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M30 6a3.9915 3.9915 0 00-7.8579-1H13V7h9.1421A3.9945 3.9945 0 0025 9.8579V19h2V9.8579A3.9962 3.9962 0 0030 6zM26 8a2 2 0 112-2A2.0023 2.0023 0 0126 8zM19 25H9.8579A3.9945 3.9945 0 007 22.1421V13H5v9.1421A3.9915 3.9915 0 109.8579 27H19zM6 28a2 2 0 112-2A2.0023 2.0023 0 016 28z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-virtual-private-cloud-alt`;
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
