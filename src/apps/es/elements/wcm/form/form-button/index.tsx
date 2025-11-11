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

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../../utils';

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
        `M21,8.625 C21.8284271,8.625 22.5,9.29657288 22.5,10.125 L22.5,20.625 C22.5,21.4534271 21.8284271,22.125 21,22.125 L3,22.125 C2.17157288,22.125 1.5,21.4534271 1.5,20.625 
          L1.5,10.125 C1.5,9.29657288 2.17157288,8.625 3,8.625 L21,8.625 Z M21,10.125 L3,10.125 L3,20.625 L21,20.625 L21,10.125 Z M16.5,11.625 L16.5,11.841 L18,15.216 L18,11.625 
            L19.5,11.625 L19.5,19.125 L18,19.125 L18,18.91 L16.5,15.535 L16.5,19.125 L15,19.125 L15,11.625 L16.5,11.625 Z M14.25,11.625 L14.25,13.125 L12.75,13.125 L12.75,19.125 
              L11.25,19.125 L11.25,13.125 L9.75,13.125 L9.75,11.625 L14.25,11.625 Z M7.5,11.625 C8.32842712,11.625 9,12.2965729 9,13.125 L9,14.625 C9,14.8988022 8.92664016,15.1554703 
                8.79850357,15.3764212 C8.92686129,15.595304 9,15.8516108 9,16.125 L9,17.625 C9,18.4534271 8.32842712,19.125 7.5,19.125 L4.5,19.125 L4.5,11.625 L7.5,11.625 Z M7.5,16.125 
                  L6,16.125 L6,17.625 L7.5,17.625 L7.5,16.125 Z M7.5,13.125 L6,13.125 L6,14.625 L7.5,14.625 L7.5,13.125 Z M11.25,4.875 L11.25,6.375 L1.5,6.375 L1.5,4.875 L11.25,4.875 Z 
                    M21,1.875 L21,3.375 L1.5,3.375 L1.5,1.875 L21,1.875 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('form-button', 24, content, attrs);
