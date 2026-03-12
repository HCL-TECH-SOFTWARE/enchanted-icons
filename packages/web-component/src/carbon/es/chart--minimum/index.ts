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
      d: 'M4,28V26H6V24H4V2H2V28a2,2,0,0,0,2,2H30V28Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8 24H10V26H8zM12 24H14V26H12zM20 24H22V26H20zM24 24H26V26H24zM28 24H30V26H28z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M27.9463,4.3281,25.9727,4C23.9487,16.1084,21.0137,22,17,22S10.0513,16.1084,8.0271,4l-1.9734.3281C7.51,13.0566,9.9631,22.93,16,23.9131V26h2V23.9131C24.0371,22.93,26.4907,13.0566,27.9463,4.3281Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-chart-minimum`;
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
