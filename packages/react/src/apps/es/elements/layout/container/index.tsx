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
        `M29,23 L29,29 L27,29 L27,27 L25,27 L25,25 L27,25 L27,23 L29,23 Z M5,23 L5,25 L7,25 L7,27 L5,27 L5,29 L3,29 L3,23 L5,23 Z M11,25 L11,27 L9,27 L9,25 L11,25 Z 
          M15,25 L15,27 L13,27 L13,25 L15,25 Z M19,25 L19,27 L17,27 L17,25 L19,25 Z M23,25 L23,27 L21,27 L21,25 L23,25 Z M27,3 C28.1045695,3 29,3.8954305 29,5 L29,17 
            C29,18.1045695 28.1045695,19 27,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,5 C3,3.8954305 3.8954305,3 5,3 L27,3 Z M27,5 L5,5 L5,17 L27,17 L27,5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('container', 32, content, attrs);
