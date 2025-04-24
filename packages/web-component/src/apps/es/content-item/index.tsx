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
        `M20.25,2.25 C21.0784271,2.25 21.75,2.92157288 21.75,3.75 L21.75,20.25 C21.75,21.0784271 21.0784271,21.75 20.25,21.75 L3.75,21.75 C2.92157288,21.75 
          2.25,21.0784271 2.25,20.25 L2.25,3.75 C2.25,2.92157288 2.92157288,2.25 3.75,2.25 L20.25,2.25 Z M20.25,3.75 L3.75,3.75 L3.75,20.25 L20.25,20.25 L20.25,3.75 
            Z M18.75,16.5 L18.75,18 L12,18 L12,16.5 L18.75,16.5 Z M9,12.75 C9.82842712,12.75 10.5,13.4215729 10.5,14.25 L10.5,16.5 C10.5,17.3284271 9.82842712,18 9,18 L6.75,18 
              C5.92157288,18 5.25,17.3284271 5.25,16.5 L5.25,14.25 C5.25,13.4215729 5.92157288,12.75 6.75,12.75 L9,12.75 Z M9,14.25 L6.75,14.25 L6.75,16.5 L9,16.5 L9,14.25 
                Z M18.75,12.75 L18.75,14.25 L12,14.25 L12,12.75 L18.75,12.75 Z M17.25,6 C18.0784271,6 18.75,6.67157288 18.75,7.5 L18.75,9.75 C18.75,10.5784271 18.0784271,11.25 
                  17.25,11.25 L6.75,11.25 C5.92157288,11.25 5.25,10.5784271 5.25,9.75 L5.25,7.5 C5.25,6.67157288 5.92157288,6 6.75,6 L17.25,6 Z M17.25,7.5 L6.75,7.5 L6.75,9.75 
                    L17.25,9.75 L17.25,7.5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('content-item', 24, content, attrs);
