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
        'M14,23 L12,23 L12,9 L18,9 C19.1045695,9 20,9.8954305 20,11 L20,16 C20,17.1045695 19.1045695,18 18,18 L14,18 L14,23 Z M14,16 L18,16 L18,11 L14,11 L14,16 Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('paragraph', 32, content, attrs);
