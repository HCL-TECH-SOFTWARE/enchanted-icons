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
    elem: 'path',
    attrs: {
      d:
        `M3.75,12 C3.74904193,15.6521356 6.1499677,18.8700601 9.65114591,19.9092166 C13.1523241,20.9483732 16.92002,19.5613077
         18.911625,16.5 L18.911625,16.5 L15,16.5 L15,15 L21,15 L21,21 L19.5,21 L19.5,18.236325 C16.8726494,21.3927196 12.5496296,22.5652371 8.68747602,21.1689678
          C4.82532244,19.7726986 2.25151667,16.1067987 2.25,12 L2.25,12 Z M4.5,5.763675 C7.12735056,2.60728035 11.4503704,1.43476288 15.312524,2.83103215 C19.1746776,4.22730143
           21.7484833,7.89320127 21.75,12 L21.75,12 L20.25,12 C20.2509581,8.34786442 17.8500323,5.12993991 14.3488541,4.09078336 C10.8476759,3.05162681 7.07998004,4.43869234
            5.088375,7.5 L5.088375,7.5 L9,7.5 L9,9 L3,9 L3,3 L4.5,3 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
      `M12.125,14.75 C12.7463203,14.75 13.25,15.2536797 13.25,15.875 C13.25,16.4963203 12.7463203,17 12.125,17 C11.5036797,17 11,16.4963203 11,15.875 C11,15.2536797
       11.5036797,14.75 12.125,14.75 Z M12.875,8 L12.875,13.25 L11.375,13.25 L11.375,8 L12.875,8 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('status-error', 24, content, attrs);
