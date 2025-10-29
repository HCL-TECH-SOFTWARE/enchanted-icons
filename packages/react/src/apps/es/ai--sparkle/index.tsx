/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
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
        `M21.8119 14.3881L18.0667 4.26667L14.3214 14.3881L4.2 18.1333L14.3214 21.8786L18.0667 32L21.8119 21.8786L31.9333 18.1333L21.8119 
        14.3881ZM26.1484 18.1333L20.1911 15.929L18.0667 10.1877L15.9422 15.929L9.98497 18.1333L15.9422 20.3377L18.0667 26.0789L20.1911 
        20.3377L26.1484 18.1333ZM5.28213 7.4512L6.86667 11.7333L8.4512 7.4512L12.7333 5.86667L8.4512 4.28213L6.86667 0L5.28213 4.28213L1 
        5.86667L5.28213 7.4512ZM6.78497 5.86667L6.86667 5.8969L6.94836 5.86667L6.86667 5.83644L6.78497 5.86667Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('ai--sparkle', 32, content, attrs);
