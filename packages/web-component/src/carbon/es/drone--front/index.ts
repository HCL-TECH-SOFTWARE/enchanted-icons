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
      d: 'M28 19V15H26v2H6V15H4v4h7v4.4116L7 25.6367V30H9V26.8125L12.26 25h7.481L23 26.8125V30h2V25.6367l-4-2.2251V19zm-9 4H13V19h6zM0 11H10V13H0zM22 11H32V13H22zM16 6a5.9817 5.9817 0 00-4.2407 1.7593l1.4136 1.4136a3.9936 3.9936 0 015.6542 0l1.4136-1.4136A5.9814 5.9814 0 0016 6z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8.9324,4.9321l1.4133,1.4136a7.9877,7.9877,0,0,1,11.3086,0l1.4136-1.4136a9.9844,9.9844,0,0,0-14.1355,0Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-drone-front`;
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
