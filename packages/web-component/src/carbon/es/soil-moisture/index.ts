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
      d: 'M24.5,28A5.385,5.385,0,0,1,19,22.751a5.3837,5.3837,0,0,1,.874-2.8308L23.49,14.5383a1.217,1.217,0,0,1,2.02,0L29.06,19.8154A5.4923,5.4923,0,0,1,30,22.751,5.385,5.385,0,0,1,24.5,28Zm0-11.38-2.9356,4.3672A3.3586,3.3586,0,0,0,21,22.751a3.51,3.51,0,0,0,7,0,3.4356,3.4356,0,0,0-.63-1.867Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '5',
      cy: '13',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '11',
      cy: '19',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '15',
      cy: '25',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '17',
      cy: '15',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '13',
      cy: '11',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '27',
      cy: '11',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '27',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '3',
      cy: '21',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M2 6H30V8H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-soil-moisture`;
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
