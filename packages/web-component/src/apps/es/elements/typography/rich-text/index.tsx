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
        `M27,18 C28.1045695,18 29,18.8954305 29,20 L29,24 C29,25.1045695 28.1045695,26 27,26 L5,26 C3.8954305,26 3,25.1045695 3,24 L3,20 C3,18.8954305 3.8954305,18 5,18 L27,18 
          Z M27,20 L5,20 L5,24 L27,24 L27,20 Z M20,12 L20,14 L12,14 L12,12 L20,12 Z M9,6 L9,8 L7,8 L7,14 L5,14 L5,8 L3,8 L3,6 L9,6 Z M28,6 L28,8 L12,8 L12,6 L28,6 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('rich-text', 32, content, attrs);
