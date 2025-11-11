/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
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

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M10,5 C11.1045695,5 12,5.8954305 12,7 L12,9 L28,9 C29.1045695,9 30,9.8954305 30,11 L30,25 C30,26.1045695 29.1045695,27 28,27 L4,27 C2.8954305,27 2,26.1045695 2,25 
          L2,7 C2,5.8954305 2.8954305,5 4,5 L10,5 Z M10,7 L4,7 L4,25 L28,25 L28,11 L10,11 L10,7 Z M28,5 L28,7 L22,7 L22,5 L28,5 Z M20,5 L20,7 L14,7 L14,5 L20,5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('tabs', 32, content, attrs);
