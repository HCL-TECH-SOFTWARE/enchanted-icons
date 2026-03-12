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
      d: 'M22,2V4h4.5859l-6.4016,6.4014a6.9474,6.9474,0,0,0-8.3686,0L10.4143,9,13,6.4141,11.5857,5,9,7.5859,5.4141,4H10V2H2v8H4V5.4141L7.5859,9,5,11.5854,6.4143,13,9,10.4141l1.4014,1.4013A6.9785,6.9785,0,0,0,15,22.92V25H11v2h4v3h2V27h4V25H17V22.92a6.9785,6.9785,0,0,0,4.5984-11.1045L28,5.4141V10h2V2ZM16,21a5,5,0,1,1,5-5A5.0059,5.0059,0,0,1,16,21Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-transgender`;
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
