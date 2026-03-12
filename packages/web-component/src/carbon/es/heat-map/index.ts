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
      d: 'M20 18H22V20H20zM28 16H30V18H28zM14 6H16V8H14zM16 22H12V16a2.0023 2.0023 0 00-2-2H4a2.0023 2.0023 0 00-2 2v6a2.0023 2.0023 0 002 2h6v4a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V24A2.0023 2.0023 0 0016 22zM4 22V16h6v6zm8 6V24h4v4zM28 30H24a2.0021 2.0021 0 01-2-2V24a2.0021 2.0021 0 012-2h4a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0128 30zm-4-6v4h4V24zM28 2H22a2.0023 2.0023 0 00-2 2v6H18a2.0023 2.0023 0 00-2 2v2a2.0023 2.0023 0 002 2h2a2.0023 2.0023 0 002-2V12h6a2.0023 2.0023 0 002-2V4A2.0023 2.0023 0 0028 2zM18 14V12h2v2zm4-4V4h6v6zM8 10H4A2.0021 2.0021 0 012 8V4A2.0021 2.0021 0 014 2H8a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 018 10zM4 4V8H8V4z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-heat-map`;
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
