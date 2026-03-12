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
      d: 'M21 15H23V17H21z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M24 23H20a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.0023 2.0023 0 012 2V21A2.0027 2.0027 0 0124 23zM20 11h0V21h4V11zM11 15H13V17H11z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M14 23H10a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.0023 2.0023 0 012 2V21A2.0027 2.0027 0 0114 23zM10 11h0V21h4V11zM4 21H6V23H4z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-character-decimal`;
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
