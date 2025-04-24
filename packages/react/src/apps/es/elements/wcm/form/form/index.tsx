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
        `M20.25,2.25 C21.0784271,2.25 21.75,2.92157288 21.75,3.75 L21.75,20.25 C21.75,21.0784271 21.0784271,21.75 20.25,21.75 L3.75,21.75 C2.92157288,21.75 2.25,21.0784271 
          2.25,20.25 L2.25,3.75 C2.25,2.92157288 2.92157288,2.25 3.75,2.25 L20.25,2.25 Z M20.25,3.75 L3.75,3.75 L3.75,20.25 L20.25,20.25 L20.25,3.75 Z M18,17.25 C18.4142136,17.25 
            18.75,17.5857864 18.75,18 C18.75,18.3681898 18.4846873,18.6744126 18.1348134,18.7379165 L18,18.75 L12.75,18.75 C12.3357864,18.75 12,18.4142136 12,18 C12,17.6318102 
              12.2653127,17.3255874 12.6151866,17.2620835 L12.75,17.25 L18,17.25 Z M17.25,11.25 C18.0784271,11.25 18.75,11.9215729 18.75,12.75 L18.75,14.25 C18.75,15.0784271 
                18.0784271,15.75 17.25,15.75 L6.75,15.75 C5.92157288,15.75 5.25,15.0784271 5.25,14.25 L5.25,12.75 C5.25,11.9215729 5.92157288,11.25 6.75,11.25 L17.25,11.25 Z 
                  M17.25,12.75 L6.75,12.75 L6.75,14.25 L17.25,14.25 L17.25,12.75 Z M17.25,5.25 C18.0784271,5.25 18.75,5.92157288 18.75,6.75 L18.75,8.25 C18.75,9.07842712 
                    18.0784271,9.75 17.25,9.75 L6.75,9.75 C5.92157288,9.75 5.25,9.07842712 5.25,8.25 L5.25,6.75 C5.25,5.92157288 5.92157288,5.25 6.75,5.25 L17.25,5.25 Z 
                      M17.25,6.75 L6.75,6.75 L6.75,8.25 L17.25,8.25 L17.25,6.75 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('form', 24, content, attrs);
