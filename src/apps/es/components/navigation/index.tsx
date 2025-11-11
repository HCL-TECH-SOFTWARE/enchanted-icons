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
        `M28,8 C29.1045695,8 30,8.8954305 30,10 L30,22 C30,23.1045695 29.1045695,24 28,24 L4,24 C2.8954305,24 2,23.1045695 2,22 L2,10 C2,8.8954305 2.8954305,8 
          4,8 L28,8 Z M28,10 L4,10 L4,22 L28,22 L28,10 Z M26,18 L26,20 L20,20 L20,18 L26,18 Z M26,15 L26,17 L20,17 L20,15 L26,15 Z M26,12 L26,14 L20,14 L20,12 L26,12 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('navigation', 32, content, attrs);
