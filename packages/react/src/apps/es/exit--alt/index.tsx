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
        `M13.5 1.5H4.5C4.10218 1.5 3.72067 1.65806 3.43936 1.93936C3.15806 2.22067 3 2.60218 3 3V21C3 21.3978 3.15806 21.7793 3.43936 22.0606C3.72067 22.3419 4.10218 22.5 4.5 22.5H13.5C13.8978
        22.5 14.2793 22.3419 14.5606 22.0606C14.8419 21.7793 15 21.3978 15 21V18.75H13.5V21H4.5V3H13.5V5.25H15V3C15 2.60218 14.8419 2.22067 14.5606 1.93936C14.2793 1.65806 13.8978 1.5 13.5 1.5Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
        'M10.3725 12.75L13.0575 15.4425L12 16.5L7.5 12L12 7.5L13.0575 8.5575L10.3725 11.25H21V12.75H10.3725Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('exit--alt', 24, content, attrs);
