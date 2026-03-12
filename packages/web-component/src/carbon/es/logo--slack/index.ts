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
      d: 'M9.0423 19.1661A2.5212 2.5212 0 116.5212 16.645H9.0423zM10.3127 19.1661a2.5212 2.5212 0 015.0423 0v6.3127a2.5212 2.5212 0 11-5.0423 0zM12.8339 9.0423A2.5212 2.5212 0 1115.355 6.5212V9.0423zM12.8339 10.3127a2.5212 2.5212 0 010 5.0423H6.5212a2.5212 2.5212 0 110-5.0423zM22.9577 12.8339a2.5212 2.5212 0 112.5211 2.5211H22.9577zM21.6873 12.8339a2.5212 2.5212 0 01-5.0423 0V6.5212a2.5212 2.5212 0 115.0423 0zM19.1661 22.9577a2.5212 2.5212 0 11-2.5211 2.5211V22.9577zM19.1661 21.6873a2.5212 2.5212 0 010-5.0423h6.3127a2.5212 2.5212 0 110 5.0423z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-logo-slack`;
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
