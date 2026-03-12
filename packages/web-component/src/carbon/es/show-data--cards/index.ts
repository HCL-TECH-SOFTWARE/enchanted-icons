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
      d: 'M28 10H4A2.0022 2.0022 0 012 8V4A2.0021 2.0021 0 014 2H28a2.0021 2.0021 0 012 2V8A2.0022 2.0022 0 0128 10zM4 4V8H28V4zM28 30H4a2.0022 2.0022 0 01-2-2V24a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v4A2.0022 2.0022 0 0128 30zM4 24v4H28V24zM28 20H4a2.0022 2.0022 0 01-2-2V14a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v4A2.0022 2.0022 0 0128 20zM4 14v4H28V14z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-show-data-cards`;
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
