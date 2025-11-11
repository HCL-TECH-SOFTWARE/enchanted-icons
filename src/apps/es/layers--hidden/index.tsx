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
        'M12.3556 1.58965C12.1336 1.47012 11.8664 1.47012 11.6444 1.58965L9 3.01357L10.5819 3.86538L12 3.10182L13.4181 3.86538L15 3.01357L12.3556 1.58965Z',
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
        'M17.0609 5.82692L15 4.7172L16.5819 3.86538L18.6429 4.97511L17.0609 5.82692Z',
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
        `M20.2248 5.82692L18.6429 6.67874L20.1681 7.5L18.5893 8.35011L20.1712 9.20192L22.1056 8.16035C22.3485 8.02954 22.5 7.77591 22.5 7.5C22.5 7.22409 22.3485 6.97046 22.1056 6.83965L20.2248
        5.82692Z`,
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
        'M14.9464 10.3116L17.0073 9.20192L18.5893 10.0537L16.5284 11.1635L14.9464 10.3116Z',
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
        'M14.9464 12.0153L13.3645 11.1635L12 11.8982L10.6355 11.1635L9.05357 12.0153L11.6444 13.4104C11.8664 13.5299 12.1336 13.5299 12.3556 13.4104L14.9464 12.0153Z',
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
        'M7.47163 11.1635L9.05357 10.3116L6.99266 9.20192L5.41071 10.0537L7.47163 11.1635Z',
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
        'M3.83195 7.5L5.41071 8.35011L3.82877 9.20192L1.89443 8.16035C1.65149 8.02954 1.5 7.77591 1.5 7.5C1.5 7.22409 1.65149 6.97046 1.89443 6.83965L3.7752 5.82692L5.35714 6.67874L3.83195 7.5Z',
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
        'M9 4.7172L6.93909 5.82692L5.35714 4.97511L7.41805 3.86538L9 4.7172Z',
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
        `M11.6444 17.9094C11.7536 17.9684 11.8758 17.9993 12 17.9994C12.1241 17.9995 12.2463 17.9688 12.3556 17.9099L22.1056 12.6599L21.3944 11.3394L12 16.3976L2.60556 11.3394L1.89441
        12.6594L11.6444 17.9094Z`,
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
        `M11.6444 22.4094C11.7536 22.4684 11.8758 22.4993 12 22.4994C12.1241 22.4995 12.2463 22.4688 12.3556 22.4099L22.1056 17.1599L21.3944 15.8394L12 20.8976L2.60556 15.8394L1.89441
        17.1594L11.6444 22.4094Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('layers--hidden', 24, content, attrs);
