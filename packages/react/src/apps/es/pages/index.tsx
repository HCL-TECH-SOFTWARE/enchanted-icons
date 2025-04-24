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
        `M17.9934011,1.50024634 C18.8218282,1.50024634 19.4934011,2.17181922 19.4934011,3.00024634 L19.493,4.5 L21,4.5 C21.8284271,4.5 22.5,5.17157288 22.5,6 L22.5,21 
          C22.5,21.8284271 21.8284271,22.5 21,22.5 L6,22.5 C5.17157288,22.5 4.5,21.8284271 4.5,21 L4.5,19.505 L3.00024634,19.5055049 C2.17181922,19.5055049 1.50024634,18.833932 
            1.50024634,18.0055049 L1.50024634,7.50024634 C1.49489003,7.3007686 1.57710294,7.10893849 1.72524634,6.97524634 L6.97524634,1.72524634 C7.10893849,1.57710294 
              7.3007686,1.49489003 7.50024634,1.50024634 L17.9934011,1.50024634 Z M19.4934011,18.0055049 C19.4934011,18.833932 18.8218282,19.5055049 17.9934011,19.5055049 
                L6,19.505 L6,21 L21,21 L21,6 L19.493,6 L19.4934011,18.0055049 Z M18.0071811,3.00024634 L9.00024634,3.00024634 L9.00024634,7.50024634 C9.00024634,8.32867347 
                  8.32867347,9.00024634 7.50024634,9.00024634 L3.00024634,9.00024634 L3.00024634,17.9940965 L18.0071811,17.9940965 L18.0071811,3.00024634 Z M7.50024634,3.30024634 
                    L3.30024634,7.50024634 L7.50024634,7.50024634 L7.50024634,3.30024634 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('pages', 24, content, attrs);
