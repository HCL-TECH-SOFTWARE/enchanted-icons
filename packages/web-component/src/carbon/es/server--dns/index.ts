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
      d: 'M16 2a8 8 0 108 8A8.0092 8.0092 0 0016 2zm5.91 7H19.4724a15.2457 15.2457 0 00-.7917-4.36A6.0088 6.0088 0 0121.91 9zM16.022 15.999h-.0076c-.3813-.1206-1.3091-1.8213-1.479-4.999h2.9292C17.2952 14.1763 16.3711 15.877 16.022 15.999zM14.5354 9c.1694-3.1763 1.0935-4.877 1.4426-4.999h.0076c.3813.1206 1.3091 1.8213 1.479 4.999zM13.3193 4.64A15.2457 15.2457 0 0012.5276 9H10.09A6.0088 6.0088 0 0113.3193 4.64zM10.09 11h2.4373a15.2457 15.2457 0 00.7917 4.36A6.0088 6.0088 0 0110.09 11zm8.59 4.36A15.2457 15.2457 0 0019.4724 11H21.91A6.0088 6.0088 0 0118.6807 15.36zM28 30H4a2.0021 2.0021 0 01-2-2V22a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 30zM4 22v6H28V22z'
    }
  },
  {
    elem: 'circle',
    attrs: {
      cx: '7',
      cy: '25',
      r: '1'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-server-dns`;
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
