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
      d: 'M29,22H13a1,1,0,0,0,0,2h9.6772a11.0991,11.0991,0,0,1-7.5561,2.9976c-.1384,0-.2783.0048-.4177,0a11.0945,11.0945,0,0,1-3.201-21.584,15.1528,15.1528,0,0,0-.0488,6.5869h2.0457a13.15,13.15,0,0,1,.39-7.6206A1.015,1.015,0,0,0,12.98,3a.9825.9825,0,0,0-.1746.0156A13.0958,13.0958,0,0,0,14.63,28.9971c.164.0063.3281,0,.4907,0A13.04,13.04,0,0,0,25.3779,24H29a1,1,0,0,0,0-2Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M27 20H17a1 1 0 010-2H27a1 1 0 010 2zM25 16H13a1 1 0 010-2H25a1 1 0 010 2z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-haze-night`;
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
