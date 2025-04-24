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
        `M20.25,2.25 C21.0784271,2.25 21.75,2.92157288 21.75,3.75 L21.75,20.25 C21.75,21.0784271 21.0784271,21.75 20.25,21.75 L3.75,21.75 C2.92157288,21.75 2.25,21.0784271 
          2.25,20.25 L2.25,3.75 C2.25,2.92157288 2.92157288,2.25 3.75,2.25 L20.25,2.25 Z M20.25,18.75 L3.75,18.75 L3.75,20.25 L20.25,20.25 L20.25,18.75 Z M20.25,9.75 L3.75,9.75 
            L3.75,17.25 L20.25,17.25 L20.25,9.75 Z M20.25,3.75 L3.75,3.75 L3.75,8.25 L20.25,8.25 L20.25,3.75 Z M18.75,5.25 L18.75,6.75 L14.25,6.75 L14.25,5.25 L18.75,5.25 Z 
              M6.75,5.25 L6.75,6.75 L5.25,6.75 L5.25,5.25 L6.75,5.25 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('site', 24, content, attrs);
