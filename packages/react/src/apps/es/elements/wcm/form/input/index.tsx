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

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../../utils';

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
        `M21,6.75 C21.8284271,6.75 22.5,7.42157288 22.5,8.25 L22.5,15.75 C22.5,16.5784271 21.8284271,17.25 21,17.25 L3,17.25 C2.17157288,17.25 1.5,16.5784271 1.5,15.75 L1.5,8.25 
          C1.5,7.42157288 2.17157288,6.75 3,6.75 L21,6.75 Z M21,8.25 L3,8.25 L3,15.75 L21,15.75 L21,8.25 Z M8.25,9.75 L8.25,11.25 L7.125,11.25 L7.125,14.25 L5.625,14.25 L5.625,11.25 
            L4.5,11.25 L4.5,9.75 L8.25,9.75 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('input', 24, content, attrs);
