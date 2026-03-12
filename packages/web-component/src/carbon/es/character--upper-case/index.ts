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
      d: 'M30 23H24a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24V21h6zM20 12a3.0033 3.0033 0 00-3-3H12V23h5a3.0033 3.0033 0 003-3V18a2.977 2.977 0 00-.78-2A2.9768 2.9768 0 0020 14zm-6-1h3a1.0013 1.0013 0 011 1v2a1.0013 1.0013 0 01-1 1H14zm4 9a1.0009 1.0009 0 01-1 1H14V17h3a1.0009 1.0009 0 011 1zM8 9H4a2.002 2.002 0 00-2 2V23H4V18H8v5h2V11A2.002 2.002 0 008 9zM4 16V11H8v5z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-character-upper-case`;
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
