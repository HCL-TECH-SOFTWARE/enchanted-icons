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
        `M20.2502 2.25019C21.0787 2.25019 21.7502 2.92176 21.7502 3.75019L21.75 8.24994H20.25L20.2502 3.75019H9.75025V8.25018C9.75025 9.07861 9.07867 9.75018 8.25025
        9.75018H3.75025V20.2499H9.75V21.7499H3.75025C2.92182 21.7499 2.25025 21.0784 2.25025 20.2499V8.25018C2.24489 8.05071 2.3271 7.85888 2.47525 7.72518L7.72525 2.47519C7.85894 2.32704 8.05077
        2.24483 8.25025 2.25019H20.2502ZM8.25025 4.05019L4.05025 8.25018H8.25025V4.05019Z`,
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
        'M13.8075 17.6925L15.75 19.635L20.6925 14.6925L21.75 15.75L15.75 21.75L12.75 18.75L13.8075 17.6925Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page--checked', 24, content, attrs);
