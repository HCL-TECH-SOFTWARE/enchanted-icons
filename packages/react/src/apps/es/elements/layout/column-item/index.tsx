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
        `M20,27 L20,29 L20,29 C19.5281388,29 18,28.7191423 18,27 L20,27 Z M24,27 L24,29 L22,29 L22,27 L24,27 Z M28,27 C28,27.4718612 27.7191423,29 26,29 L26,27 L28,27 Z M12,3 
          C13.1045695,3 14,3.8954305 14,5 L14,27 C14,28.1045695 13.1045695,29 12,29 L6,29 C4.8954305,29 4,28.1045695 4,27 L4,5 C4,3.8954305 4.8954305,3 6,3 L12,3 Z M12,5 L6,5 L6,27 
            L12,27 L12,5 Z M20,23 L20,25 L18,25 L18,23 L20,23 Z M28,23 L28,25 L26,25 L26,23 L28,23 Z M20,19 L20,21 L18,21 L18,19 L20,19 Z M28,19 L28,21 L26,21 L26,19 L28,19 Z M20,15 
              L20,17 L18,17 L18,15 L20,15 Z M28,15 L28,17 L26,17 L26,15 L28,15 Z M20,11 L20,13 L18,13 L18,11 L20,11 Z M28,11 L28,13 L26,13 L26,11 L28,11 Z M20,7 L20,9 L18,9 L18,7 
                L20,7 Z M28,7 L28,9 L26,9 L26,7 L28,7 Z M26,3 C26.4718612,3 28,3.28085773 28,5 L26,5 L26,3 Z M24,3 L24,5 L22,5 L22,3 L24,3 Z M20,3 L20,5 L20,5 L18.0069204,5 L18,5 
                  C18,4.52813876 18.2808577,3 20,3 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('column-item', 32, content, attrs);
