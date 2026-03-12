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
      d: 'M21.4148,12H28V10H23.4148l4.5857-4.5854L26.5864,4,22,8.5869V4H20v6.5869L18.5867,12H17V8H15v4H13.4133L12,10.5869V4H10V8.5869L5.4136,4,4,5.4146,8.5852,10H4v2h6.5852L12,13.415V15H8v2h4v1.5869L10.5867,20H4v2H8.5867L4,26.5864l1.4141,1.4141L10,23.415V28h2V21.415L13.4148,20H15v4h2V20h1.5852L20,21.415V28h2V23.415l4.5854,4.5855L28,26.5864,23.4133,22H28V20H21.4133L20,18.5869V17h4V15H20V13.415ZM18,18H14V14h4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-snowflake`;
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
