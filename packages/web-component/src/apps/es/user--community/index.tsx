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
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M21.1284 7C21.1284 4.238 18.833 2 16.0002 2C13.1673 2 10.8719 4.238 10.8719 7C10.8719 9.762 13.1673 12 16.0002 12C18.833 12 21.1284 9.762 21.1284 7ZM16.0001 10C14.3037 10 12.9232 8.654
         12.9232 7C12.9232 5.346 14.3037 4 16.0001 4C17.6965 4 19.077 5.346 19.077 7C19.077 8.654 17.6965 10 16.0001 10Z`,
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
        `M8.82058 22C11.6534 22 13.9488 19.762 13.9488 17C13.9488 14.238 11.6534 12 8.82058 12C5.98776 12 3.69238 14.238 3.69238 17C3.69238 19.762 5.98776 22 8.82058 22ZM8.82058 14C10.517 14 11.8975
         15.346 11.8975 17C11.8975 18.654 10.517 20 8.82058 20C7.12416 20 5.74366 18.654 5.74366 17C5.74366 15.346 7.12416 14 8.82058 14Z`,
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
      `M7.79497 24H9.84625C12.675 24 14.9744 26.242 14.9744 29V30H12.9232V29C12.9232 27.346 11.5426 26 9.84625 26H7.79497C6.09855 26 4.71805 27.346 4.71805 29V30H2.66675V29C2.66675 26.242 4.96625
       24 7.79497 24Z`,
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
      `M18.0514 17C18.0514 19.762 20.3468 22 23.1796 22C26.0124 22 28.3078 19.762 28.3078 17C28.3078 14.238 26.0124 12 23.1796 12C20.3468 12 18.0514 14.238 18.0514 17ZM23.1796 14C24.876 14 26.2564
       15.346 26.2564 17C26.2564 18.654 24.876 20 23.1796 20C21.483 20 20.1026 18.654 20.1026 17C20.1026 15.346 21.483 14 23.1796 14Z`,
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
      `M22.154 24H24.2052C27.034 24 29.3334 26.242 29.3334 29V30H27.2822V29C27.2822 27.346 25.9016 26 24.2052 26H22.154C20.4576 26 19.077 27.346 19.077 29V30H17.0258V29C17.0258 26.242 19.3252 24
       22.154 24Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('user--community', 32, content, attrs);
