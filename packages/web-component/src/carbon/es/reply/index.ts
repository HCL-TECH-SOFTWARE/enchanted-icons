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
      d: 'M28.88,30a1,1,0,0,1-.88-.5A15.19,15.19,0,0,0,15,22v6a1,1,0,0,1-.62.92,1,1,0,0,1-1.09-.21l-12-12a1,1,0,0,1,0-1.42l12-12a1,1,0,0,1,1.09-.21A1,1,0,0,1,15,4v6.11a17.19,17.19,0,0,1,15,17,16.34,16.34,0,0,1-.13,2,1,1,0,0,1-.79.86ZM14.5,20A17.62,17.62,0,0,1,28,26,15.31,15.31,0,0,0,13.91,12,1,1,0,0,1,13,11V6.41L3.41,16,13,25.59V21a1,1,0,0,1,1-1h.54Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-reply`;
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
