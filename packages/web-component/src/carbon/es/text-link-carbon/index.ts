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
      d: 'M18.7061,27.585a5.2615,5.2615,0,0,1-3.7227-8.9834l1.415,1.414a3.2638,3.2638,0,1,0,4.6153,4.6162l6.03-6.03a3.264,3.264,0,0,0-4.6162-4.6158l-1.414-1.414a5.2637,5.2637,0,0,1,7.4443,7.4438l-6.03,6.03A5.2461,5.2461,0,0,1,18.7061,27.585Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M10.2642 29.9971A5.2619 5.2619 0 016.542 21.0137l6.03-6.03a5.2636 5.2636 0 117.4438 7.4438l-1.414-1.414a3.2639 3.2639 0 10-4.6158-4.6158l-6.03 6.03a3.264 3.264 0 004.6157 4.6162l1.414 1.4141A5.2452 5.2452 0 0110.2642 29.9971zM2 10H10V12H2zM2 6H14V8H2zM2 2H14V4H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-text-link-carbon`;
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
