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
      d: 'M28,21V18a4,4,0,0,0-8,0v3a2.0025,2.0025,0,0,0-2,2v5a2.0025,2.0025,0,0,0,2,2h8a2.0025,2.0025,0,0,0,2-2V23A2.0025,2.0025,0,0,0,28,21Zm-6-3a2,2,0,0,1,4,0v3H22ZM20,28V23h8v5Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.499,9.085,16.707,2.293A1,1,0,0,0,16,2H6A2.0058,2.0058,0,0,0,4,4V28a2.0058,2.0058,0,0,0,2,2h8V28H6V4h8v6a2.0023,2.0023,0,0,0,2,2h6.292a1.7075,1.7075,0,0,0,1.207-2.915ZM16,10V4.4141L21.5854,10Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-document-protected`;
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
