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
      d: 'M17,28V17h1a2.0023,2.0023,0,0,0,2-2V11a2.0023,2.0023,0,0,0-2-2H14a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h1V28H2v2H30V28ZM14,11h4l.0015,4H14Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M9.3325 18.2168a7.0007 7.0007 0 010-10.4341l1.334 1.49a5 5 0 000 7.4537zM22.667 18.2168l-1.334-1.49a4.9995 4.9995 0 000-7.4537l1.334-1.49a7 7 0 010 10.4341z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6.3994 21.8008a11.0019 11.0019 0 010-17.6006L7.6 5.8a9.0009 9.0009 0 000 14.4014zM25.6006 21.8008l-1.2012-1.6a9.001 9.001 0 000-14.4019l1.2012-1.6a11.002 11.002 0 010 17.6011z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-weather-station`;
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
