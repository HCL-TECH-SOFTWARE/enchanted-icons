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
        `M20.25 2.25019C21.0784 2.25019 21.75 2.92176 21.75 3.75019L21.7498 8.24994H20.2498L20.25 3.75019H9.75V8.25019C9.75 9.07861 9.07843 9.75019 8.25 9.75019H3.75V20.2499H9V21.7499H3.75C2.92158
        21.7499 2.25 21.0784 2.25 20.2499V8.25019C2.24465 8.05071 2.32686 7.85888 2.475 7.72519L7.725 2.47519C7.85869 2.32704 8.05052 2.24483 8.25 2.25019H20.25ZM8.25 4.05019L4.05
        8.25019H8.25V4.05019Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
        `M20.0325 11.4718L22.2825 13.7218C22.3528 13.7915 22.4086 13.8745 22.4467 13.9659C22.4848 14.0573 22.5044 14.1553 22.5044 14.2543C22.5044 14.3533 22.4848 14.4513 22.4467 14.5427C22.4086
        14.6341 22.3528 14.7171 22.2825 14.7868L15.3075 21.7543H12V18.4468L18.9675 11.4718C19.0372 11.4015 19.1202 11.3457 19.2116 11.3076C19.303 11.2695 19.401 11.2499 19.5 11.2499C19.599 11.2499
        19.697 11.2695 19.7884 11.3076C19.8798 11.3457 19.9628 11.4015 20.0325 11.4718ZM13.5 20.2543H14.6925L18.4425 16.5043L17.25 15.3118L13.5 19.0618V20.2543ZM18.3075 14.2543L19.5 15.4468L20.6925
        14.2543L19.5 13.0618L18.3075 14.2543Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--draft', 24, content, attrs);
