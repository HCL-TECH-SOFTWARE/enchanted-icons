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
        'M21 4.5C21 3.675 20.325 3 19.5 3H16.5V1.5H15V3H9V1.5H7.5V3H4.5C3.675 3 3 3.675 3 4.5V19.5C3 20.325 3.675 21 4.5 21H7.5V19.5H4.5V4.5H7.5V6H9V4.5H15V6H16.5V4.5H19.5V10.5H21V4.5Z',
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
        `M21.075 12V12.9201L10.2466 14.7764C9.52642 14.8999 9 15.5242 9 16.2549V18.0951C9 18.8258 9.52642 19.4501 10.2466 19.5736L10.5 19.617V21C10.5 21.8284 11.1716 22.5 12 22.5H16.5C17.3284
        22.5 18 21.8284 18 21V20.9027L21.075 21.4299V22.35H22.575V12H21.075ZM16.5 20.6456L12 19.8742V21H16.5V20.6456ZM10.5 16.2549L21.075 14.442V19.908L10.5 18.0951V16.2549Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('calendar--bullhorn', 24, content, attrs);
