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
      d: 'M28 17H18a2.0025 2.0025 0 00-2 2v6a2.0025 2.0025 0 002 2h4V25H18V19H28v6H25.4648l-2.5937 3.8906L24.5352 30l2-3H28a2.0025 2.0025 0 002-2V19A2.0025 2.0025 0 0028 17zM8.6667 24.1086l.8614-.8615a.8334.8334 0 01.8988-.1844l1.0493.42A.8334.8334 0 0112 24.2561v1.9082a.8334.8334 0 01-.8786.8341c-7.3546-.4578-8.84-6.6863-9.1158-9.0723A.8316.8316 0 012.8343 17H4.7085a.8335.8335 0 01.7737.5238l.42 1.0493a.8332.8332 0 01-.1845.8988l-.8614.8614A4.5267 4.5267 0 008.6667 24.1086zM21 9H28V11H21zM21 5H30V7H21zM17 6L14 8.2V6a2.0024 2.0024 0 00-2-2H4A2.0024 2.0024 0 002 6v6a2.0024 2.0024 0 002 2h8a2.0024 2.0024 0 002-2V9.8L17 12zM4 12V6h8v6z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-communication-unified`;
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
