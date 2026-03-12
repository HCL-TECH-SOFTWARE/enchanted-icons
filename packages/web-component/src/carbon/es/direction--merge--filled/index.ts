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
      d: 'M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM17.8784,15.4648l2.6572,2.6563A4.9682,4.9682,0,0,1,22,21.6567V26H20V21.6567a2.9821,2.9821,0,0,0-.8784-2.1215l-2.6572-2.6563A5.0021,5.0021,0,0,1,16,16.3135a5.0021,5.0021,0,0,1-.4644.5654l-2.6572,2.6567A2.9805,2.9805,0,0,0,12,21.6567V26H10V21.6567a4.9682,4.9682,0,0,1,1.4644-3.5356l2.6572-2.6567A2.9805,2.9805,0,0,0,15,13.3433V8.8281l-4.5859,4.586L9,12l7-7,7,7-1.4141,1.4141L17,8.8281v4.5152A2.9821,2.9821,0,0,0,17.8784,15.4648Z'
    }
  },
  {
    elem: 'path',
    attrs: {
      fill: 'none',
      d: 'M17.8784,15.4648l2.6572,2.6563A4.9682,4.9682,0,0,1,22,21.6567V26H20V21.6567a2.9821,2.9821,0,0,0-.8784-2.1215l-2.6572-2.6563A5.0021,5.0021,0,0,1,16,16.3135a5.0021,5.0021,0,0,1-.4644.5654l-2.6572,2.6567A2.9805,2.9805,0,0,0,12,21.6567V26H10V21.6567a4.9682,4.9682,0,0,1,1.4644-3.5356l2.6572-2.6567A2.9805,2.9805,0,0,0,15,13.3433V8.8281l-4.5859,4.586L9,12l7-7,7,7-1.4141,1.4141L17,8.8281v4.5152A2.9821,2.9821,0,0,0,17.8784,15.4648Z',
      'data-icon-path': 'inner-path'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-direction-merge-filled`;
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
