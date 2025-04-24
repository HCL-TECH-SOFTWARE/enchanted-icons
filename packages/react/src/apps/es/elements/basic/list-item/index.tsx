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

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

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
        `M4,26 L4,26.2283737 L4,26.2283737 L4,28 C2.34697859,28 2.02373208,26.5871498 2.00131226,26.0589861 L2,26 L4,26 Z M8,26 L8,28 L6,28 L6,26 L8,26 Z M12,26 C12,27.6530214 
          10.5871498,27.9762679 10.0589861,27.9986877 L10,28 L10,26 L12,26 Z M30,22 L30,24 L28,24 L28,22 L30,22 Z M26,22 L26,24 L24,24 L24,22 L26,22 Z M22,22 L22,24 L20,24 L20,22 
            L22,22 Z M18,22 L18,24 L16,24 L16,22 L18,22 Z M4,22 L4,24 L2,24 L2,22 L4,22 Z M12,22 L12,24 L10,24 L10,22 L12,22 Z M10,18 C10.4718612,18 12,18.2808577 12,20 L10,20 L10,18 
              Z M8,18 L8,20 L6,20 L6,18 L8,18 Z M4,18 L4,19.7716263 L4,20 L4,20 L2,20 L2,20 C2,19.5281388 2.28085773,18 4,18 Z M10,4 C11.1045695,4 12,4.8954305 12,6 L12,12 C12,13.1045695 
                11.1045695,14 10,14 L4,14 C2.8954305,14 2,13.1045695 2,12 L2,6 C2,4.8954305 2.8954305,4 4,4 L10,4 Z M10,6 L4,6 L4,12 L10,12 L10,6 Z M30,8 L30,10 L16,10 L16,8 L30,8 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('list-item', 32, content, attrs);
