/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

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
        'M27.39,13.82H16.21v4.63h6.44c-.6,2.95-3.11,4.64-6.44,4.64a7.09,7.09,0,0,1,0-14.18,7,7,0,0,1,4.42,1.58L24.12,7a12,12,0,1,0-7.91,21c6,0,11.45-4.36,11.45-12A9.56,9.56,0,0,0,27.39,13.82Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('logo--google', 32, content, attrs);
