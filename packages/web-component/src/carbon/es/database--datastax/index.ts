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
      d: 'M18.8684 22.0684l1.7937-1.7476A4.2184 4.2184 0 0023.95 21.9534c1.4026 0 2.0005-.5288 2.0005-1.38 0-.69-.4138-1.1267-1.4717-1.2646l-1.1958-.1612c-2.5754-.3217-4.0009-1.4484-4.0009-3.633 0-2.3225 1.8166-3.7942 4.5529-3.7942a5.7221 5.7221 0 014.691 1.8855l-1.7246 1.7246a3.9649 3.9649 0 00-2.8743-1.2876c-1.2649 0-1.8167.5059-1.8167 1.2417 0 .8049.4368 1.1726 1.5638 1.3567l1.2187.1609c2.6213.3679 3.886 1.5408 3.886 3.5412 0 2.3226-1.9546 3.9322-4.9439 3.9322A6.0942 6.0942 0 0118.8684 22.0684zM4.24 7.95h5.8409c4.185 0 6.9213 2.69 6.9213 8.0254S14.2661 24 10.0811 24H4.24zm5.8409 13.36c2.2534 0 3.7021-1.3338 3.7021-4.07V14.71c0-2.7364-1.4487-4.07-3.7021-4.07H7.2756V21.31z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-database-datastax`;
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
