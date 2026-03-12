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
      d: 'M26,20a2.97,2.97,0,0,0-1.8551.6607L22,19.4224V17.8157a3,3,0,1,0-2,0v1.6067l-2.1449,1.2383A2.97,2.97,0,0,0,16,20a3.02,3.02,0,1,0,2.9254,2.3525L21,21.1548l2.0746,1.1977A2.9978,2.9978,0,1,0,26,20ZM16,24a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,16,24Zm5-10a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,14Zm5,10a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,26,24Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,31A11.0125,11.0125,0,0,1,5,20V6.3823L15.9873.8816,26.4478,6.1187l-.8956,1.7885L15.9873,3.1184,7,7.6177V20a9.0008,9.0008,0,0,0,14.3994,7.2012L22.6006,28.8A10.9077,10.9077,0,0,1,16,31Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-security-services-alt`;
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
