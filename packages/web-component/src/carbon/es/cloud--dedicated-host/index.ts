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
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '6',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M26 2H6A2 2 0 004 4V8a2 2 0 002 2h9v4h2V10h9a2 2 0 002-2V4A2 2 0 0026 2zm0 6H6V4H26zM17 28L17 26 15 26 15 28 4 28 4 30 28 30 28 28 17 28z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '20',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6,24H26a2,2,0,0,0,2-2V18a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v4A2,2,0,0,0,6,24Zm0-6H26v4H6Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-cloud-dedicated-host`;
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
