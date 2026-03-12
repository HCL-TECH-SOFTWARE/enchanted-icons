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
    elem: 'switch',
    attrs: {},
    content: [
      {
        elem: 'g',
        attrs: {},
        content: [
          {
            elem: 'path',
            attrs: {
              d: 'M28 13H30V15H28z'
            }
          },
          {
            elem: 'path',
            attrs: {
              d: 'M24.2 3.8H26.2V5.8H24.2z',
              transform: 'rotate(-45.001 25.192 4.808)'
            }
          },
          {
            elem: 'path',
            attrs: {
              d: 'M15 0H17V2H15z'
            }
          },
          {
            elem: 'path',
            attrs: {
              d: 'M5.8 3.8H7.8V5.8H5.8z',
              transform: 'rotate(-134.999 6.808 4.808)'
            }
          },
          {
            elem: 'path',
            attrs: {
              d: 'M2 13H4V15H2zM13 30H19V32H13zM11 26H21V28H11zM16 4C10.5 4 6 8.5 6 14c0 4.4 2 6.3 3.5 7.6 1 .9 1.5 1.5 1.5 2.4h2c0-1.8-1.1-2.9-2.2-3.9C9.4 18.9 8 17.5 8 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.5-1.4 4.9-2.8 6.1-1.1 1-2.2 2-2.2 3.9h2c0-.9.5-1.5 1.5-2.4C24 20.3 26 18.4 26 14 26 8.5 21.5 4 16 4z'
            }
          }
        ]
      }
    ]
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-enrichment`;
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
