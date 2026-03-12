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
      d: 'M20.5857,29H11.4143A1.9865,1.9865,0,0,1,10,28.4141L3.5859,22A1.9865,1.9865,0,0,1,3,20.5857V11.4143A1.9865,1.9865,0,0,1,3.5859,10L10,3.5859A1.9865,1.9865,0,0,1,11.4143,3h9.1714A1.9865,1.9865,0,0,1,22,3.5859L28.4141,10A1.9865,1.9865,0,0,1,29,11.4143v9.1714A1.9865,1.9865,0,0,1,28.4141,22L22,28.4141A1.9865,1.9865,0,0,1,20.5857,29ZM11.4141,5,5,11.4141v9.1716L11.4141,27h9.1716L27,20.5859V11.4143L20.5859,5H11.4141Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-stop-sign`;
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
