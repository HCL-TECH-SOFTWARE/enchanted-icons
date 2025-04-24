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
        `M7.62556 6.37556L8.41111 7.16111L11.2144 9.96444L12 10.75L12.7856 9.96444L15.5889 7.16111L16.3744 6.37556L15.5889 5.58889L12.7856 2.78556L12 2L11.2144 2.78556L8.41111 5.58889L7.62556
        6.37556ZM7.62556 17.6244L8.41111 18.4111L11.2144 21.2144L12 22L12.7856 21.2144L15.5889 18.4111L16.3744 17.6256L15.5889 16.8389L12.7856 14.0356L12 13.25L11.2144 14.0356L8.41111
        16.8389L7.62556 17.6244ZM2.78556 12.7856L2 12L2.78556 11.2144L5.58889 8.41111L6.37556 7.62556L7.16111 8.41111L9.96444 11.2144L10.75 12L9.96444 12.7856L7.16111 15.5889L6.37556
        16.3744L5.58889 15.5889L2.78556 12.7856ZM13.25 12L14.0356 12.7856L16.8389 15.5889L17.6244 16.3744L18.4111 15.5889L21.2144 12.7856L22 12L21.2144 11.2144L18.4111 8.41111L17.6256
        7.62556L16.8389 8.41111L14.0356 11.2144L13.25 12Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('data-component', 24, content, attrs);
