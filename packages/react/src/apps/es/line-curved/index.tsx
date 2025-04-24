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
  width: 24,
  height: 24,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      // eslint-why - because the svg path is to long
      // eslint-disable-next-line max-len
      d: 'M12.81,30a11,11,0,0,1-7.4-3.06,4.86,4.86,0,0,1-.83-6.2q2.49-4.14,7.94-4.2c-1.3-5.49-1.64-11,3-13.52,4.92-2.66,9.68-.15,14.13,7.47l-1.72,1C22.21,1.68,17.9,4,16.49,4.77c-3.64,2-3.16,6.8-1.88,11.87a31.9,31.9,0,0,1,7.88,2.16l-.75,1.86a30.73,30.73,0,0,0-6.57-1.92c.21.76.43,1.51.65,2.26.44,1.48.85,2.88,1.16,4.18a3.52,3.52,0,0,1-1.56,4.23A5.47,5.47,0,0,1,12.81,30Zm-.06-11.45c-3,0-5.17,1.07-6.46,3.22a2.88,2.88,0,0,0,.56,3.78c2,2.13,6,3,7.61,2.12.26-.14.94-.52.58-2-.31-1.27-.71-2.64-1.14-4.1-.28-1-.58-2-.86-3Z',
    },
  },
];

export default createSvgIcon('line-curved', 24, content, attrs);
