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
        `M28,7 C29.1045695,7 30,7.8954305 30,9 L30,23 C30,24.1045695 29.1045695,25 28,25 L4,25 C2.8954305,25 2,24.1045695 2,23 L2,9 C2,7.8954305 2.8954305,7 4,7 L28,7 Z 
          M28,9 L4,9 L4,23 L28,23 L28,9 Z M22,11 L22,11.289 L24,15.789 L24,11 L26,11 L26,21 L24,21 L24,20.713 L22,16.213 L22,21 L20,21 L20,11 L22,11 Z M19,11 L19,13 L17,13 
            L17,21 L15,21 L15,13 L13,13 L13,11 L19,11 Z M10,11 C11.1045695,11 12,11.8954305 12,13 L12,15 C12,15.364732 11.9023677,15.7066608 11.7318119,16.0010775 C11.9025897,16.2941173 
              12,16.6356829 12,17 L12,19 C12,20.1045695 11.1045695,21 10,21 L6,21 L6,11 L10,11 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('button', 32, content, attrs);
