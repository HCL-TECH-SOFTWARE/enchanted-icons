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
      d: 'M30 8H24v6h2V11.541A5.939 5.939 0 0128 16a6.0039 6.0039 0 01-5.0945 5.9243A7.0273 7.0273 0 0020 17.2617V6a4 4 0 00-8 0V17.2617a6.996 6.996 0 1010.9292 6.68A7.9794 7.9794 0 0027.2651 10H30zM14 6a2 2 0 014 0v7H14zm2 22a4.9965 4.9965 0 01-2.499-9.3252L14 18.3857V15h4v3.3857l.499.2891A4.9965 4.9965 0 0116 28zM2 10a8.04 8.04 0 002.7349 6H2v2H8V12H6v2.4592A5.94 5.94 0 014 10a6.0066 6.0066 0 016-6V2A8.0092 8.0092 0 002 10z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-temperature-inversion`;
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
