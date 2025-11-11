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
        `M21,11.25 C21.8284271,11.25 22.5,11.9215729 22.5,12.75 L22.5,18.75 C22.5,19.5784271 21.8284271,20.25 21,20.25 L3,20.25 C2.17157288,20.25 1.5,19.5784271 1.5,18.75 
          L1.5,12.75 C1.5,11.9215729 2.17157288,11.25 3,11.25 L21,11.25 Z M21,12.75 L3,12.75 L3,18.75 L21,18.75 L21,12.75 Z M15,7.5 L15,9 L6.75,9 L6.75,7.5 L15,7.5 Z M5.25,4.5 
            L5.25,6 L4.125,6 L4.125,9 L2.625,9 L2.625,6 L1.5,6 L1.5,4.5 L5.25,4.5 Z M21,4.5 L21,6 L6.75,6 L6.75,4.5 L21,4.5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('label', 24, content, attrs);
