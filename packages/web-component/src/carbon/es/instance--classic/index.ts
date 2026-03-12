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
      d: 'M23.5,21H23V19h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,19H9v2H8.5A6.4973,6.4973,0,0,1,7.2,8.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,21Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '27',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26,23H17V15.83l2.59,2.58L21,17l-5-5-5,5,1.41,1.41L15,15.83V23H6a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V25A2.0023,2.0023,0,0,0,26,23Zm0,6H6V25H26Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-instance-classic`;
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
