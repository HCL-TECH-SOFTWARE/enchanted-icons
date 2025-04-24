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
        'M 6.320312 8.703125 L 11.320312 8.703125 L 11.320312 10.703125 L 6.320312 10.703125 Z M 6.320312 8.703125 ',
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
        'M 17.320312 8.703125 L 22.320312 8.703125 L 22.320312 10.703125 L 17.320312 10.703125 Z M 17.320312 8.703125 ',
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
        'M 17.320312 12.996094 L 22.320312 12.996094 L 22.320312 14.996094 L 17.320312 14.996094 Z M 17.320312 12.996094 ',
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
        'M 22.320312 17.289062 L 17.320312 17.289062 L 17.320312 19.289062 L 22.320312 19.289062 Z M 22.320312 17.289062 ',
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
        'M 11.320312 12.996094 L 6.320312 12.996094 L 6.320312 14.996094 L 11.320312 14.996094 Z M 11.320312 12.996094 ',
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
        'M 6.320312 17.289062 L 11.320312 17.289062 L 11.320312 19.289062 L 6.320312 19.289062 Z M 6.320312 17.289062 ',
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
        `M 4.320312 4.996094 L 24.320312 4.996094 C 24.851562 4.996094 25.359375 5.207031 25.734375 5.582031 C 26.109375 5.957031 26.320312 6.464844 26.320312 6.996094 L 26.320312 8.976562 L 28.320312
          8.976562 C 28.851562 8.976562 29.359375 9.1875 29.734375 9.5625 C 30.109375 9.9375 30.320312 10.445312 30.320312 10.976562 L 30.320312 24.976562 C 30.320312 25.503906 30.109375 26.015625
          29.734375 26.390625 C 29.359375 26.761719 28.851562 26.972656 28.320312 26.976562 L 8.320312 26.976562 C 7.789062 26.972656 7.28125 26.761719 6.90625 26.390625 C 6.53125 26.015625 6.320312
          25.503906 6.320312 24.976562 L 6.320312 22.996094 L 4.320312 22.996094 C 3.789062 22.996094 3.28125 22.785156 2.90625 22.410156 C 2.53125 22.035156 2.320312 21.527344 2.320312 20.996094
          L 2.320312 6.996094 C 2.320312 6.464844 2.53125 5.957031 2.90625 5.582031 C 3.28125 5.207031 3.789062 4.996094 4.320312 4.996094 Z M 8.320312 22.996094 L 8.320312 24.976562 L 17.320312
          24.976562 L 17.320312 22.996094 Z M 19.320312 22.996094 L 19.320312 24.976562 L 28.320312 24.976562 L 28.320312 10.976562 L 26.320312 10.976562 L 26.320312 20.996094 C 26.320312 21.527344
          26.109375 22.035156 25.734375 22.410156 C 25.359375 22.785156 24.851562 22.996094 24.320312 22.996094 Z M 13.320312 6.996094 L 4.320312 6.996094 L 4.320312 20.996094 L 13.320312 20.996094
          Z M 15.320312 6.996094 L 15.320312 20.996094 L 24.320312 20.996094 L 24.320312 6.996094 Z M 15.320312 6.996094 `,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('library', 32, content, attrs);
