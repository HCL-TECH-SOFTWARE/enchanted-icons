/* ======================================================================== *
  * Copyright 2025 HCL America Inc.                                          *
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

const attrs: IIconAttrs = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M7 5.5H6V8.5H7V5.5Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M4.5 6.5H3.5V8.5H4.5V6.5Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M2 3.5H1V8.5H2V3.5Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15 14.2929L11.2239 10.5169C12.0198 9.56275 12.5 8.33665 12.5 7C12.5 3.9673 10.0327 1.5 7 1.5C5.7987 1.5 4.65735 1.88035 3.69935 2.6001L4.29995 3.39965C5.0834 2.81105 6.0171 2.5 7 2.5C9.4813 2.5 11.5 4.51855 11.5 7C11.5 9.48145 9.4813 11.5 7 11.5C5.5713 11.5 4.25905 10.844 3.39965 9.69995L2.6001 10.3008C3.65015 11.6982 5.2539 12.5 7 12.5C8.33665 12.5 9.56275 12.0198 10.5168 11.2239L14.2929 15L15 14.2929Z',
      fill: 'currentColor'
    }
  }
];

export const ICON_NAME = 'icon-data-analytics';
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