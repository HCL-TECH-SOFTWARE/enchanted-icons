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
        `M5,26 L5,27.9930796 L5,28 C4.52813876,28 3,27.7191423 3,26 L5,26 Z M9,26 L9,28 L7,28 L7,26 L9,26 Z M13,26 L13,28 L11,28 L11,26 L13,26 Z M17,26 L17,28 L15,28 L15,26 
          L17,26 Z M21,26 L21,28 L19,28 L19,26 L21,26 Z M25,26 L25,28 L23,28 L23,26 L25,26 Z M29,26 C29,26.4718612 28.7191423,28 27,28 L27,26 L29,26 Z M5,22 L5,24 L3,24 L3,22 L5,22 
            Z M29,22 L29,24 L27,24 L27,22 L29,22 Z M27,18 C27.4718612,18 29,18.2808577 29,20 L27,20 L27,18 Z M25,18 L25,20 L23,20 L23,18 L25,18 Z M21,18 L21,20 L19,20 L19,18 L21,18 
              Z M17,18 L17,20 L15,20 L15,18 L17,18 Z M13,18 L13,20 L11,20 L11,18 L13,18 Z M9,18 L9,20 L7,20 L7,18 L9,18 Z M5,18 L5,20 L3,20 C3,19.5281388 3.28085773,18 5,18 Z M27,4 
                C28.1045695,4 29,4.8954305 29,6 L29,12 C29,13.1045695 28.1045695,14 27,14 L5,14 C3.8954305,14 3,13.1045695 3,12 L3,6 C3,4.8954305 3.8954305,4 5,4 L27,4 Z M27,6 L5,6 
                  L5,12 L27,12 L27,6 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('section', 32, content, attrs);
