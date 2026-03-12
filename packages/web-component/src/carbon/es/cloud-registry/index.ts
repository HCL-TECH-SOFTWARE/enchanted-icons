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
      d: 'M28 30H23a2.0023 2.0023 0 01-2-2V23a2.0023 2.0023 0 012-2h5a2.0023 2.0023 0 012 2v5A2.0023 2.0023 0 0128 30zm-5-7h-.0012L23 28h5V23zM16 23H11a2.0023 2.0023 0 01-2-2V11a2.0023 2.0023 0 012-2H21a2.0023 2.0023 0 012 2v5H21V11H11V21h5z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,30H4a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,4,2H28a2.0023,2.0023,0,0,1,2,2V16H28V4H4V28H16Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-cloud-registry`;
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
