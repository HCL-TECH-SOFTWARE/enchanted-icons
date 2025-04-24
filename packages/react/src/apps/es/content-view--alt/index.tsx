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
        `M3.75 2.25H20.25C20.6478 2.25 21.0294 2.40804 21.3106 2.68933C21.5919 2.97064 21.75 3.35217 21.75 3.75V20.25C21.75 20.6478 21.5919 21.0294 21.3106 21.3106C21.0294 21.5919 20.6478 21.75
        20.25 21.75H3.75C3.35217 21.75 2.97064 21.5919 2.68933 21.3106C2.40804 21.0294 2.25 20.6478 2.25 20.25V3.75C2.25 3.35217 2.40804 2.97064 2.68933 2.68933C2.97064 2.40804 3.35217 2.25 3.75
        2.25ZM20.25 3.75H3.75V6.75H20.25V3.75ZM3.75 8.25V20.25H20.25V8.25H3.75ZM14.25 10.5H6V12H14.25V10.5ZM15.75 14.25H6V15.75H15.75V14.25Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('content-view--alt', 24, content, attrs);
