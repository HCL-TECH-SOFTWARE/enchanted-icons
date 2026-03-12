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
      d: 'M25 30a4.9863 4.9863 0 01-3-8.98V15a3 3 0 016 0v6.02A4.9863 4.9863 0 0125 30zm0-16a1.0011 1.0011 0 00-1 1v7.13l-.4971.2893A2.9676 2.9676 0 0022 25a3 3 0 006 0 2.9676 2.9676 0 00-1.5029-2.5811L26 22.13V15A1.0011 1.0011 0 0025 14zM2 6H30V8H2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-soil-temperature`;
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
