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
      d: 'M17,13V6H8V22H24V13ZM10,8h5v5H10Zm0,7h5v5H10Zm12,5H17V15h5Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M28 11H19V2h9zM21 9h5V4H21zM28 20H26v2h2v6H4V22H6V20H4a2.0024 2.0024 0 00-2 2v6a2.0024 2.0024 0 002 2H28a2.0024 2.0024 0 002-2V22A2.0024 2.0024 0 0028 20z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '25',
      r: '1'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-container-registry`;
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
