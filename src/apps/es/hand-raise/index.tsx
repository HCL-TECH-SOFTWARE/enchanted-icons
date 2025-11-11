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
        `M5.7,19.4l8.1,10.3c0.5,0.7,1.4,1.1,2.3,1.1h6.3c2.4,0,4.3-1.9,4.3-4.3V7.3c0-0.9-0.8-1.7-1.7-1.7
        c-0.9,0-1.7,0.8-1.7,1.7v8.1v-11c0-1.1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.9v9.6v-11c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9
        v12V5.6c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v14.2c0,0.3-0.3,0.4-0.5,0.2l-2.3-3.1c-0.7-1-2.2-1.1-3.1-0.3
        C5.2,17.3,5,18.5,5.7,19.4z`,
      fill: 'none',
      stroke: '#000000',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('hand-raise', 32, content, attrs);
