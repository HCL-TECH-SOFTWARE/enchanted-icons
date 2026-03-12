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
      d: 'M20,6a9.9272,9.9272,0,0,0-3.9968.8394,9.9758,9.9758,0,0,1,2.2451,1.36,8,8,0,1,1,0,15.6016,9.9758,9.9758,0,0,1-2.2451,1.36A9.9976,9.9976,0,1,0,20,6Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M12,16a8.01,8.01,0,0,0,6.2483,7.8008,9.9858,9.9858,0,0,0,0-15.6016A8.01,8.01,0,0,0,12,16Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      fill: 'none',
      d: 'M12,16a8.01,8.01,0,0,1,6.2483-7.8008,9.9758,9.9758,0,0,0-2.2451-1.36,9.9909,9.9909,0,0,0,0,18.3212,9.9758,9.9758,0,0,0,2.2451-1.36A8.01,8.01,0,0,1,12,16Z',
      'data-icon-path': 'inner-path'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M10,16a10.0105,10.0105,0,0,1,6.0032-9.1606,10,10,0,1,0,0,18.3212A10.0105,10.0105,0,0,1,10,16Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-join-left`;
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
