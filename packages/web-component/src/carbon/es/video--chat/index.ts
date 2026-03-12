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
      d: 'M8 12H17V14H8zM8 17H13V19H8z'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M21,26H4a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,4,6H21a2.0023,2.0023,0,0,1,2,2v4.0566l5.4189-3.87A.9995.9995,0,0,1,30,9V23a.9995.9995,0,0,1-1.5811.8135L23,19.9434V24A2.0023,2.0023,0,0,1,21,26ZM4,8V24.001L21,24V18a.9995.9995,0,0,1,1.5811-.8135L28,21.0566V10.9434l-5.4189,3.87A.9995.9995,0,0,1,21,14V8Z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-video-chat`;
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
