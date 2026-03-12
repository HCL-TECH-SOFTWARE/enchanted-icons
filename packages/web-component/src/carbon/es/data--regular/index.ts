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
      d: 'm27,24c-.4622,0-.8948.1133-1.2859.2998l-4.8289-4.8291c.699-.981,1.1147-2.1768,1.1147-3.4707,0-3.3086-2.6917-6-6-6-1.2937,0-2.4897.416-3.4709,1.1147l-4.8289-4.8286c.1865-.3911.2998-.8237.2998-1.2861,0-1.6567-1.3433-3-3-3s-3,1.3433-3,3,1.3433,3,3,3c.4622,0,.8948-.1133,1.2859-.2998l4.8289,4.8291c-.699.981-1.1147,2.1768-1.1147,3.4707,0,3.3086,2.6917,6,6,6,1.2937,0,2.4897-.416,3.4709-1.1147l4.8289,4.8286c-.1865.3911-.2998.8237-.2998,1.2861,0,1.6567,1.3433,3,3,3s3-1.3433,3-3-1.3433-3-3-3Zm-11-4c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-data-regular`;
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
