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
      d: 'M23,9h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2V4H11V3A2,2,0,0,0,9,1H3A2,2,0,0,0,1,3V7A2,2,0,0,0,3,9H9a2,2,0,0,0,2-2V6h4V26a2.0023,2.0023,0,0,0,2,2h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V25a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V17h4v1a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H23a2,2,0,0,0-2,2v1H17V6h4V7A2,2,0,0,0,23,9Zm0-6h6V7H23ZM9,7H3V3H9ZM23,25h6v4H23Zm0-11h6v4H23Z',
      transform: 'translate(0 .005)'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-tree-view-alt`;
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
