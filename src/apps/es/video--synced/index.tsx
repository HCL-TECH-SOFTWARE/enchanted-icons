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
  viewBox: '0 0 16 16',
  width: 16,
  height: 16,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: `M7 13h3.5c.27 0 .52-.11.71-.29s.29-.44.29-.71V9.97l2.71 1.93c.07.05.16.08.25.09
          .09 0 .18-.01.26-.05s.15-.11.2-.18c.05-.08.07-.17.07-.26v-7c0-.09-.03-.18-.07-.26
          a.49.49 0 0 0-.46-.23c-.09 0-.18.04-.25.09L11.5 6.04V4c0-.27-.11-.52-.29-.71
          A1 1 0 0 0 10.5 3H2c-.27 0-.52.11-.71.29A1 1 0 0 0 1 4v3h1V4h8.5v3c0 .09.03.18.07.26
          a.49.49 0 0 0 .46.23c.09 0 .18-.04.25-.09l2.71-1.94v5.07L11.28 8.6a.54.54 0 0 0-.25-.09
          c-.09 0-.18.01-.26.05s-.15.11-.2.18c-.05.08-.07.17-.07.26v3H7z`,
      fill: 'currentColor',
    },
  },
  {
    elem: 'path',
    attrs: {
      d: 'm6.37 8.67-2.99 2.98-1.67-1.67-.71.71 2.38 2.38 3.69-3.7z',
      fill: 'currentColor',
    },
  },
];

export default createSvgIcon('video--synced', 16, content, attrs);
