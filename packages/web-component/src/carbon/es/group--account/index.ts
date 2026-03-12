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
      d: 'M17 11H11a3 3 0 00-3 3v4h2V14a1 1 0 011-1h6a1 1 0 011 1v1h2V14A3 3 0 0017 11zM10 6a4 4 0 104-4A4 4 0 0010 6zm6 0a2 2 0 11-2-2A2 2 0 0116 6zM22 27H16a2.0021 2.0021 0 01-2-2V19a2.0021 2.0021 0 012-2h6a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0122 27zm-6-8v6h6V19zM8 30H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H8V4H4V28H8zM28 30H24V28h4V4H24V2h4a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-group-account`;
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
