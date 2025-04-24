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
        `M26,3 C27.1045695,3 28,3.8954305 28,5 L28,27 C28,28.1045695 27.1045695,29 26,29 L20,29 C18.8954305,29 18,28.1045695 18,27 L18,5 C18,3.8954305 18.8954305,3 20,3 
          L26,3 Z M12,3 C13.1045695,3 14,3.8954305 14,5 L14,27 C14,28.1045695 13.1045695,29 12,29 L6,29 C4.8954305,29 4,28.1045695 4,27 L4,5 C4,3.8954305 4.8954305,3 6,3 
            L12,3 Z M26,5 L20,5 L20,27 L26,27 L26,5 Z M12,5 L6,5 L6,27 L12,27 L12,5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('columns', 32, content, attrs);
