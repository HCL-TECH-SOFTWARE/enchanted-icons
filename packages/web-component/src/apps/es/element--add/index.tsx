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
        `M19.6125 3.61218C20.3788 3.61218 21 4.19685 21 4.91806V19.2475C21 19.5938 20.8538 19.926 20.5937 20.1709C20.3334 20.4157 19.9804 20.5534 19.6125 20.5534H4.3875C4.0195 20.5534 3.6666
        20.4157 3.4064 20.1709C3.14619 19.926 3 19.5938 3 19.2475V4.91806C3 4.19685 3.62121 3.61218 4.3875 3.61218H19.6125ZM19.5 5.02395H4.5V19.1416H19.5V5.02395ZM12.75
        7.37689V11.3769H16.9999V12.7887H12.75V16.7886H11.25V12.7887H7V11.3769H11.25V7.37689H12.75Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('element--add', 24, content, attrs);
