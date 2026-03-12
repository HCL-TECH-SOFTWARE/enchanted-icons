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
      d: 'M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '25',
      r: '1'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21,13a2.9609,2.9609,0,0,0-1.2854.3008L17.4141,11l2.3-2.3008A2.9609,2.9609,0,0,0,21,9a3,3,0,1,0-3-3,2.9665,2.9665,0,0,0,.3,1.2852L16,9.5859,13.7,7.2852A2.9665,2.9665,0,0,0,14,6a3,3,0,1,0-3,3,2.9609,2.9609,0,0,0,1.2854-.3008L14.5859,11l-2.3005,2.3008A2.9609,2.9609,0,0,0,11,13a3,3,0,1,0,3,3,2.9665,2.9665,0,0,0-.3-1.2852L16,12.4141l2.3,2.3007A2.9665,2.9665,0,0,0,18,16a3,3,0,1,0,3-3Zm0-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,5ZM10,6a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,10,6Zm1,11a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,11,17Zm10,0a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,21,17Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-accessor`;
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
