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
      d: 'M28,30H4a2.0021,2.0021,0,0,1-2-2V22a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2v6A2.0021,2.0021,0,0,1,28,30ZM4,22v6H28V22Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '25',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 11.586L17 9.586 17 6 15 6 15 10.414 17.586 13 19 11.586z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M16,18a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,18ZM16,4a6,6,0,1,0,6,6A6.0067,6.0067,0,0,0,16,4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-server-time`;
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
