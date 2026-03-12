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
      d: 'M16 18H6a2 2 0 01-2-2V6A2 2 0 016 4H16a2 2 0 012 2V16A2 2 0 0116 18zM6 6V16H16V6zM26 12v4H22V12h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V12a2 2 0 00-2-2zM26 22v4H22V22h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2zM16 22v4H12V22h4m0-2H12a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-application`;
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
