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
      d: 'M27,28V16H19V28H15V12H7V28H4V2H2V28a2,2,0,0,0,2,2H30V28ZM13,14v6H9V14Zm12,4v6H21V18Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M22.7856,14a1.9877,1.9877,0,0,1-1.1787-.3865L11.2041,5.987,8.2419,10,6.6374,8.8065l2.9812-4a1.9978,1.9978,0,0,1,2.749-.446l10.4214,7.64,3.6045-4.8613L28,8.3306l-3.6045,4.8611A2.0014,2.0014,0,0,1,22.7856,14Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-chart-combo-stacked`;
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
