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
      d: 'M15 15H41V17H15z',
      transform: 'rotate(90 28 16)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23 3H25V5H23z',
      transform: 'rotate(90 24 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 3H21V5H19z',
      transform: 'rotate(90 20 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15 3H17V5H15z',
      transform: 'rotate(90 16 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M11 3H13V5H11z',
      transform: 'rotate(90 12 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7 3H9V5H7z',
      transform: 'rotate(90 8 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 3H5V5H3z',
      transform: 'rotate(90 4 4)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 7H5V9H3z',
      transform: 'rotate(90 4 8)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 11H5V13H3z',
      transform: 'rotate(90 4 12)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 15H5V17H3z',
      transform: 'rotate(90 4 16)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 23H5V25H3z',
      transform: 'rotate(90 4 24)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 19H5V21H3z',
      transform: 'rotate(90 4 20)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M23 27H25V29H23z',
      transform: 'rotate(90 24 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M19 27H21V29H19z',
      transform: 'rotate(90 20 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M15 27H17V29H15z',
      transform: 'rotate(90 16 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M11 27H13V29H11z',
      transform: 'rotate(90 12 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7 27H9V29H7z',
      transform: 'rotate(90 8 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M3 27H5V29H3z',
      transform: 'rotate(90 4 28)'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8 10H18V12H8zM8 15H14V17H8z'
    }
  }
];

export const ICON_NAME = `${ICON_PREFIX}icon-border-right`;
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
