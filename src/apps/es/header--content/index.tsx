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
        `M2.25 8.33348C2.2509 9.11546 2.93742 9.74917 3.78457 9.75H20.2154C21.0625 9.74917 21.7491 9.1155 21.75 8.33355V3.66653C21.7491 2.88454 21.0626 2.25083 20.2154 2.25H3.78457C2.93742 2.25083
        2.2509 2.88454 2.25 3.66653V8.33348ZM20.25 8.25V3.75H3.75V8.25H20.25Z`,
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
        `M22.5 13.5C22.5 12.6716 21.8284 12 21 12H13.5C12.6716 12 12 12.6716 12 13.5V21C12 21.8284 12.6716 22.5 13.5 22.5H21C21.8284 22.5 22.5 21.8284 22.5 21V13.5ZM13.5 19.5H21V21H13.5V19.5ZM13.5
        16.5H21V18H13.5V16.5ZM13.5 13.5H21V15H13.5V13.5Z`,
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
        'M6.75 21.75V20.25H5.25V21.75H6.75Z',
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
        'M9.75 21.75V20.25H8.25V21.75H9.75Z',
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
        'M3.75 21.75V20.25H2.25C2.25 21.2463 2.93435 21.5985 3.4087 21.7072L3.56595 21.736C3.59021 21.7394 3.61339 21.7421 3.6353 21.7441L3.75 21.75Z',
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
        'M3.75 18.75V17.25H2.25V18.75H3.75Z',
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
        'M3.75 15.75V14.25H2.25V15.75H3.75Z',
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
        'M3.75 12.75V11.25H2.25V12.75H3.75Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('header--content', 24, content, attrs);
