/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

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
        `M25,9 L25,11 L20,11 L20,14 L24,14 C25.1045695,14 26,14.8954305 26,16 L26,16 L26,21 C26,22.1045695 25.1045695,23 24,23 L24,23 L20,23 C18.8954305,23 18,22.1045695 
          18,21 L18,21 L18,11 C18,9.8954305 18.8954305,9 20,9 L20,9 L25,9 Z M8,9 L8,15 L12,15 L12,9 L14,9 L14,23 L12,23 L12,17 L8,17 L8,23 L6,23 L6,9 L8,9 Z M24,16 L20,16 
            L20,21 L24,21 L24,16 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('h6', 32, content, attrs);
