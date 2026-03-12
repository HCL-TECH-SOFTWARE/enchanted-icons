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
      d: 'M23.092 10.3218L30 3.4141 28.5859 2 2 28.5859 3.4141 30l6.9077-6.9077 6.3218 6.3223a2.001 2.001 0 002.8286 0l9.9424-9.9424a2.001 2.001 0 000-2.8286zM18.0579 28l-6.3218-6.3223 9.9419-9.9419L28 18.0576zM10 14a4 4 0 114-4A4.0045 4.0045 0 0110 14zm0-6a2 2 0 101.998 2.0044A2.002 2.002 0 0010 8z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.4927,20.2627l1.414-1.4141L4,13.9414V4h9.9417l4.9069,4.9067,1.4141-1.414L15.3555,2.5859A2,2,0,0,0,13.9414,2H4A2,2,0,0,0,2,4v9.9414a2,2,0,0,0,.5857,1.4141Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-tag-none`;
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
