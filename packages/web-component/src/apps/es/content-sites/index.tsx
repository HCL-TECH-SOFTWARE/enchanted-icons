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
        `M19.5,18 C19.5,18.8284271 18.8284271,19.5 18,19.5 L6,19.5 L6,21 L21,21 L21,6 L19.5,6 L19.5,18 Z M18,16.5 L3,16.5 L3,18 L18,18 L18,16.5 Z M18,9 L3,9 
          L3,15 L18,15 L18,9 Z M18,3 L3,3 L3,7.5 L18,7.5 L18,3 Z M16.5,4.5 L16.5,6 L12,6 L12,4.5 L16.5,4.5 Z M6,4.5 L6,6 L4.5,6 L4.5,4.5 L6,4.5 Z M3,19.5 C2.17157288,19.5 
            1.5,18.8284271 1.5,18 L1.5,3 C1.5,2.17157288 2.17157288,1.5 3,1.5 L18,1.5 C18.8284271,1.5 19.5,2.17157288 19.5,3 L19.5,4.5 L21,4.5 C21.8284271,4.5 22.5,5.17157288 
              22.5,6 L22.5,21 C22.5,21.8284271 21.8284271,22.5 21,22.5 L6,22.5 C5.17157288,22.5 4.5,21.8284271 4.5,21 L4.5,19.5 L3,19.5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('content-sites', 24, content, attrs);
