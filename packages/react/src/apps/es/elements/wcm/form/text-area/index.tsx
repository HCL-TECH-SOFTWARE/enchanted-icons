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
        `M21,3.75 C21.8284271,3.75 22.5,4.42157288 22.5,5.25 L22.5,18.75 C22.5,19.5784271 21.8284271,20.25 21,20.25 L3,20.25 C2.17157288,20.25 1.5,19.5784271 1.5,18.75 
          L1.5,5.25 C1.5,4.42157288 2.17157288,3.75 3,3.75 L21,3.75 Z M21,5.25 L3,5.25 L3,18.75 L21,18.75 L21,5.25 Z M19.2803301,14.4696699 C19.5406796,14.7300194 
            19.5696073,15.134156 19.3671133,15.4264583 L19.2803301,15.5303301 L17.7803301,17.0303301 C17.4874369,17.3232233 17.0125631,17.3232233 16.7196699,17.0303301 
              C16.4593204,16.7699806 16.4303927,16.365844 16.6328867,16.0735417 L16.7196699,15.9696699 L18.2196699,14.4696699 C18.5125631,14.1767767 18.9874369,14.1767767 
                19.2803301,14.4696699 Z M19.2803301,11.4696699 C19.5406796,11.7300194 19.5696073,12.134156 19.3671133,12.4264583 L19.2803301,12.5303301 L14.7803301,17.0303301 
                  C14.4874369,17.3232233 14.0125631,17.3232233 13.7196699,17.0303301 C13.4593204,16.7699806 13.4303927,16.365844 13.6328867,16.0735417 L13.7196699,15.9696699 
                    L18.2196699,11.4696699 C18.5125631,11.1767767 18.9874369,11.1767767 19.2803301,11.4696699 Z M8.25,6.75 L8.25,8.25 L7.125,8.25 L7.125,11.25 L5.625,11.25 
                      L5.625,8.25 L4.5,8.25 L4.5,6.75 L8.25,6.75 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('text-area', 24, content, attrs);
