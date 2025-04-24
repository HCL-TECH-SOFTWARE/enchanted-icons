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
        `M18,24 L18,26 L3,26 L3,24 L18,24 Z M29,18 L29,20 L3,20 L3,18 L29,18 Z M7,6 L7,7.34159342 C5.29481412,7.42781969 4.40942915,8.29348452 4.34384508,9.93858793 L4.342,10 
          L7,10 L7,12 C7,13.1045695 6.1045695,14 5,14 L3,14 L3,10 L3.00367309,9.76616544 C3.08203245,7.25538848 4.41414141,6 7,6 Z M13,6 L13,7.34159342 C11.2948141,7.42781969 
            10.4094291,8.29348452 10.3438451,9.93858793 L10.342,10 L13,10 L13,12 C13,13.1045695 12.1045695,14 11,14 L9,14 L9,10 L9.00367309,9.76616544 C9.08203245,7.25538848 
              10.4141414,6 13,6 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('quote', 32, content, attrs);
