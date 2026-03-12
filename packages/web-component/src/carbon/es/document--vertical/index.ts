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
      d: 'M16,14a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,16,14Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M24,2H8A2.0023,2.0023,0,0,0,6,4V28a2.0023,2.0023,0,0,0,2,2H24a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,24,2ZM12,24V18a.9447.9447,0,0,1,1-1h6a.9447.9447,0,0,1,1,1v6H18v4H14V24Zm8,4V26a2.0058,2.0058,0,0,0,2-2V18a2.9463,2.9463,0,0,0-3-3H13a2.9463,2.9463,0,0,0-3,3v6a2.0058,2.0058,0,0,0,2,2v2H8V4H24V28Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-document-vertical`;
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
