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
        `M20.25 13.5C21.0784 13.5 21.75 14.1716 21.75 15V18C21.75 18.8284 21.0784 19.5 20.25 19.5H3.75C2.92157 19.5 2.25 18.8284 2.25 18V15C2.25 14.1716 2.92157 13.5 3.75 13.5H20.25ZM20.25 
        15H3.75V18H20.25V15ZM15 9V10.5H9V9H15ZM21 4.5V6H9V4.5H21ZM6.75 4.5V6H5.25V10.5H3.75V6H2.25V4.5H6.75Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page-elements-rich-text', 24, content, attrs);
