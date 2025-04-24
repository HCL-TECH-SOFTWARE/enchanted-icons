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
        'M12.0001 18C11.8759 18 11.7537 17.9691 11.6445 17.91L1.8945 12.66L2.60565 11.34L12.0001 16.3982L21.3945 11.34L22.1057 12.6605L12.3557 17.9105C12.2464 17.9694 12.1242 18.0001 12.0001 18Z',
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
        `M12.0001 22.5C11.8759 22.5 11.7537 22.4691 11.6445 22.41L1.8945 17.16L2.60565 15.84L12.0001 20.8982L21.3945 15.84L22.1057 17.1605L12.3557 22.4105C12.2464 22.4694 12.1242 22.5001 12.0001
        22.5Z`,
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
        `M12.0001 13.5C11.8759 13.5 11.7537 13.4691 11.6445 13.41L1.8945 8.15999C1.77531 8.09577 1.67572 8.00048 1.60631 7.88424C1.53689 7.76799 1.50024 7.63512 1.50024 7.49973C1.50024 7.36433
        1.53689 7.23147 1.60631 7.11522C1.67572 6.99897 1.77531 6.90368 1.8945 6.83946L11.6445 1.58946C11.7537 1.5305 11.8759 1.49963 12.0001 1.49963C12.1242 1.49963 12.2464 1.5305 12.3557
        1.58946L22.1057 6.83946C22.2248 6.90368 22.3244 6.99897 22.3938 7.11522C22.4633 7.23147 22.4999 7.36433 22.4999 7.49973C22.4999 7.63512 22.4633 7.76799 22.3938 7.88424C22.3244 8.00048
        22.2248 8.09577 22.1057 8.15999L12.3557 13.41C12.2464 13.4691 12.1242 13.5 12.0001 13.5Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('layers--filled', 24, content, attrs);
