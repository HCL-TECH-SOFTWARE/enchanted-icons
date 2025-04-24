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
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M21,12 C21.8284271,12 22.5,12.6715729 22.5,13.5 L22.5,21 C22.5,21.8284271 21.8284271,22.5 21,22.5 L13.5,22.5 C12.6715729,22.5 12,21.8284271 12,21 L12,13.5 C12,12.6715729 
          12.6715729,12 13.5,12 L21,12 Z M21,19.5 L13.5,19.5 L13.5,21 L21,21 L21,19.5 Z M21,16.5 L13.5,16.5 L13.5,18 L21,18 L21,16.5 Z M4.5,15 L4.5,16.5 C3.26925042,16.5 
            3.02137814,15.4557192 3.00138716,15.0529869 L3,15 L4.5,15 Z M7.5,15 C7.5,16.2307496 6.45571922,16.4786219 6.05298688,16.4986128 L6,16.5 L6,15 L7.5,15 Z M10.5,13.5 
              L10.5,15 L9,15 L9,13.5 L10.5,13.5 Z M21,13.5 L13.5,13.5 L13.5,15 L21,15 L21,13.5 Z M6,12 C6.35389593,12 7.5,12.2106433 7.5,13.5 L6,13.5 L6,12 Z M4.5,12 L4.5,13.5 
                L3,13.5 C3,13.1461041 3.2106433,12 4.5,12 Z M6.6,4.5 C7.09705627,4.5 7.5,4.90294373 7.5,5.4 L7.5,8.1 C7.5,8.59705627 7.09705627,9 6.6,9 L3.9,9 C3.40294373,9 
                  3,8.59705627 3,8.1 L3,5.4 C3,4.90294373 3.40294373,4.5 3.9,4.5 L6.6,4.5 Z M19.5,6 L19.5,7.5 L9,7.5 L9,6 L19.5,6 Z M6,6 L4.5,6 L4.5,7.5 L6,7.5 L6,6 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('content-list-item', 24, content, attrs);
