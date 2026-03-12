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
      d: 'M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M17.5 13A3.5 3.5 0 1121 9.5 3.5041 3.5041 0 0117.5 13zm0-5A1.5 1.5 0 1019 9.5 1.5017 1.5017 0 0017.5 8zM14.5 26A3.5 3.5 0 1118 22.5 3.5041 3.5041 0 0114.5 26zm0-5A1.5 1.5 0 1016 22.5 1.5017 1.5017 0 0014.5 21zM9.5 18A3.5 3.5 0 1113 14.5 3.5041 3.5041 0 019.5 18zm0-5A1.5 1.5 0 1011 14.5 1.5017 1.5017 0 009.5 13zM22.5 21A3.5 3.5 0 1126 17.5 3.5041 3.5041 0 0122.5 21zm0-5A1.5 1.5 0 1024 17.5 1.5017 1.5017 0 0022.5 16z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-storage-pool`;
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
