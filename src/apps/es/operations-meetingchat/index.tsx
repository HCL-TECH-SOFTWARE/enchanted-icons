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
      d: `M26 4H22V2H20V4H12V2H10V4H6C5.46957 4 4.96086 4.21071 4.58578 4.58578C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58578 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304
       28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58578C27.0391 4.21071 26.5304 4 26 4ZM26 26H6V12H26V26ZM26
       10H6V6H10V8H12V6H20V8H22V6H26V10Z`,
    },
  },
  {
    elem: 'path',
    attrs: {
      d: 'M24 16H8V18H24V16Z',
    },
  },
  {
    elem: 'path',
    attrs: {
      d: 'M18 20.3999H8V22.3999H18V20.3999Z',
    },
  },
];

export default createSvgIcon('operations-meetingchat', 32, content, attrs);
