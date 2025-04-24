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
        'M12 14.0049C13.104 14.0049 14 13.1109 14 12.0049C14 10.9009 13.104 10.0049 12 10.0049C10.896 10.0049 10 10.9009 10 12.0049C10 13.1109 10.896 14.0049 12 14.0049Z',
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
        'M19.928 7.42859L12 2.85059L4.07202 7.42859V16.5806L12 21.1606L19.928 16.5806V7.42859ZM6.07202 15.4286V8.58259L12 5.16059L17.928 8.58059V15.4286L12 18.8506L6.07202 15.4286Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('data-variable', 24, content, attrs);
