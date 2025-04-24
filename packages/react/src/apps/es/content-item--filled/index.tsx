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
        'M9 14.25H6.75V16.5H9V14.25Z',
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
        'M17.25 7.5H6.75V9.75H17.25V7.5Z',
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
        `M20.25 2.25C21.0784 2.25 21.75 2.92157 21.75 3.75V20.25C21.75 21.0784 21.0784 21.75 20.25 21.75H3.75C2.92157 21.75 2.25 21.0784 2.25 20.25V3.75C2.25 2.92157 2.92157 2.25 3.75
        2.25H20.25ZM18.75 16.5V18H12V16.5H18.75ZM9 12.75C9.82843 12.75 10.5 13.4216 10.5 14.25V16.5C10.5 17.3284 9.82843 18 9 18H6.75C5.92157 18 5.25 17.3284 5.25 16.5V14.25C5.25 13.4216 5.92157
        12.75 6.75 12.75H9ZM18.75 12.75V14.25H12V12.75H18.75ZM17.25 6C18.0784 6 18.75 6.67157 18.75 7.5V9.75C18.75 10.5784 18.0784 11.25 17.25 11.25H6.75C5.92157 11.25 5.25 10.5784 5.25
        9.75V7.5C5.25 6.67157 5.92157 6 6.75 6H17.25Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('content-item--filled', 24, content, attrs);
