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
        `M21.7502 3.75025C21.7502 2.92182 21.0787 2.25025 20.2502 2.25025H8.25024C8.05077 2.24489 7.85894 2.3271 7.72524 2.47525L2.47524 7.72525C2.3271 7.85894 2.24489 8.05077 2.25024
        8.25025V20.25C2.25024 21.0784 2.92182 21.75 3.75024 21.75H11.25V20.25H3.75024V9.75025H8.25024C9.07867 9.75025 9.75024 9.07867 9.75024 8.25025V3.75025H20.2502L20.25
        11.25H21.75L21.7502 3.75025ZM4.05024 8.25025L8.25024 4.05025V8.25025H4.05024Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
        'M17.25 17.25V14.25H18.75V17.25H21.75V18.75H18.75V21.75H17.25V18.75H14.25V17.25H17.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--add', 24, content, attrs);
