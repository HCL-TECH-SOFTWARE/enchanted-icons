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

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'polygon',
    attrs: {
      points:
        '7.5,7.5 7.5,5.9 7.5,3.3 3.3,7.5',
      fill: 'none',
      stroke: 'none',
    },
  },
  {
    elem: 'polygon',
    attrs: {
      points:
        `18,15.2 18,13.5 16.5,13.5 16.5,16.5 13.5,16.5 13.5,18 16.5,18 16.5,21 18,21 18,18 21,18 21,16.5 
        18,16.5`,
      fill: 'CurrentColor',
      stroke: 'none',
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
        `M19.5,1.5h-12C7.3,1.5,7.1,1.6,7,1.7L1.7,7C1.6,7.1,1.5,7.3,1.5,7.5v12C1.5,20.3,2.2,21,3,21h7.5v-1.5H3V9h4.5
        C8.3,9,9,8.3,9,7.5V3h10.5v7.5H21V3C21,2.2,20.3,1.5,19.5,1.5z M7.5,5.9v1.6H3.3l4.2-4.2V5.9z`,
      fill: 'CurrentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page-add', 24, content, attrs);
