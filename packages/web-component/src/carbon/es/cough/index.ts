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
      d: 'M26,30H24V27H20a5.0055,5.0055,0,0,1-5-5V20.7207l-2.3162-.772a1,1,0,0,1-.5412-1.4631L15,13.7229V11a9.01,9.01,0,0,1,9-9h5V4H24a7.0078,7.0078,0,0,0-7,7v3a.9991.9991,0,0,1-.1426.5144l-2.3586,3.9312,1.8174.6057A1,1,0,0,1,17,20v2a3.0033,3.0033,0,0,0,3,3h5a1,1,0,0,1,1,1Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '9',
      cy: '23',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '6',
      cy: '20',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '6',
      cy: '26',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '3',
      cy: '17',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '3',
      cy: '29',
      r: '1'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '3',
      cy: '23',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 12H23V14H19z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-cough`;
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
