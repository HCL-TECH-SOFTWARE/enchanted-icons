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
      d: 'M28 9H22v2h6v4H24v2h4v4H22v2h6a2.0027 2.0027 0 002-2V11A2.0023 2.0023 0 0028 9zM20 23H12V17a2.002 2.002 0 012-2h4V11H12V9h6a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H14v4h6zM2.5 22.5L2.5 21.5 5.5 21.5 5.5 10.5 2.5 10.5 2.5 9.5 6.5 9.5 6.5 21.5 9.5 21.5 9.5 22.5 2.5 22.5z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M6,10V22H6V10M7,9H2v2H5V21H2v2h8V21H7V9Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-character-whole-number`;
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
