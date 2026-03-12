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
      d: 'M29.3379 17.9336l-7.7324-2.7783L18.374 11.0967A2.99 2.99 0 0016.0537 10H8.0576a2.9982 2.9982 0 00-2.48 1.3115L2.8662 15.2949A4.9884 4.9884 0 002 18.1074V26a1 1 0 001 1H5.1421a3.9806 3.9806 0 007.7158 0h6.2842a3.9806 3.9806 0 007.7158 0H29a1 1 0 001-1V18.875A1 1 0 0029.3379 17.9336zM9 28a2 2 0 112-2A2.0027 2.0027 0 019 28zm14 0a2 2 0 112-2A2.0025 2.0025 0 0123 28zm5-3H26.8579a3.9806 3.9806 0 00-7.7158 0H12.8579a3.9806 3.9806 0 00-7.7158 0H4V18.1074A2.9977 2.9977 0 014.52 16.4189l2.711-3.9814A.9992.9992 0 018.0576 12h7.9961a.9928.9928 0 01.7647.3545l3.3994 4.2685a1.0007 1.0007 0 00.4443.3184L28 19.5781zM28 2H30V9H28zM24 6H26V9H24zM20 4H22V9H20z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-vehicle-insights`;
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
