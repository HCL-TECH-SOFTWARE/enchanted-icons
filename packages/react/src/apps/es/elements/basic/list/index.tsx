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
        `M27,3 C28.1045695,3 29,3.8954305 29,5 L29,27 C29,28.1045695 28.1045695,29 27,29 L5,29 C3.8954305,29 3,28.1045695 3,27 L3,5 C3,3.8954305 3.8954305,3 5,3 
          L27,3 Z M27,5 L5,5 L5,27 L27,27 L27,5 Z M11,17 C12.1045695,17 13,17.8954305 13,19 L13,21 C13,22.1045695 12.1045695,23 11,23 L9,23 C7.8954305,23 7,22.1045695 
            7,21 L7,19 C7,17.8954305 7.8954305,17 9,17 L11,17 Z M25,19 L25,21 L15,21 L15,19 L25,19 Z M11,19 L9,19 L9,21 L11,21 L11,19 Z M11,9 C12.1045695,9 13,9.8954305 
              13,11 L13,13 C13,14.1045695 12.1045695,15 11,15 L9,15 C7.8954305,15 7,14.1045695 7,13 L7,11 C7,9.8954305 7.8954305,9 9,9 L11,9 Z M25,11 L25,13 L15,13 L15,11 
                L25,11 Z M11,11 L9,11 L9,13 L11,13 L11,11 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('list', 32, content, attrs);
