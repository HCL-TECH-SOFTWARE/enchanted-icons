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
      d: 'M12.1,2A9.8,9.8,0,0,0,6.7,3.6L13.1,10a2.1,2.1,0,0,1,.2,3,2.1,2.1,0,0,1-3-.2L3.7,6.4A9.84,9.84,0,0,0,2,12.1,10.14,10.14,0,0,0,12.1,22.2a10.9,10.9,0,0,0,2.6-.3l6.7,6.7a5,5,0,0,0,7.1-7.1l-6.7-6.7a10.9,10.9,0,0,0,.3-2.6A10,10,0,0,0,12.1,2Zm8,10.1a7.61,7.61,0,0,1-.3,2.1l-.3,1.1.8.8L27,22.8a2.88,2.88,0,0,1,.9,2.1A2.72,2.72,0,0,1,27,27a2.9,2.9,0,0,1-4.2,0l-6.7-6.7-.8-.8-1.1.3a7.61,7.61,0,0,1-2.1.3,8.27,8.27,0,0,1-5.7-2.3A7.63,7.63,0,0,1,4,12.1a8.33,8.33,0,0,1,.3-2.2l4.4,4.4a4.14,4.14,0,0,0,5.9.2,4.14,4.14,0,0,0-.2-5.9L10,4.2a6.45,6.45,0,0,1,2-.3,8.27,8.27,0,0,1,5.7,2.3A8.49,8.49,0,0,1,20.1,12.1Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-tools`;
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
