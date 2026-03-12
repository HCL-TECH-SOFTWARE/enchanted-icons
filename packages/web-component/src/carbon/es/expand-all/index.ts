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
      d: 'M12,10H26a2.0025,2.0025,0,0,0,2-2V4a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2V5H6V2H4V25a2.0025,2.0025,0,0,0,2,2h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V24a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V17h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V14a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V7h4V8A2.0025,2.0025,0,0,0,12,10Zm0-6H26l.0012,4H12Zm0,20H26l.0012,4H12Zm0-10H26l.0012,4H12Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-expand-all`;
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
