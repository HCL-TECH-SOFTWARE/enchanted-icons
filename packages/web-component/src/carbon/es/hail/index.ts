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
      cx: '21.5',
      cy: '29.5',
      r: '1.5'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '24.5',
      cy: '25.5',
      r: '1.5'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7.5',
      cy: '25.5',
      r: '1.5'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '4.5',
      cy: '29.5',
      r: '1.5'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '10.499',
      cy: '29.5',
      r: '1.5'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15.868 30.496L14.132 29.504 17.276 24 11.277 24 16.132 15.504 17.868 16.496 14.723 22 20.724 22 15.868 30.496z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23.5,22H23V20h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,20H9v2H8.5A6.4973,6.4973,0,0,1,7.2,9.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,22Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-hail`;
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
