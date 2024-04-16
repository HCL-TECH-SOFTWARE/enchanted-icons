/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

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
        `M20.3,2.3h-12c-0.2,0-0.4,0.1-0.5,0.2L2.5,7.7C2.3,7.9,2.2,8.1,2.3,8.3v12c0,0.8,0.7,1.5,1.5,1.5h16.5c0.8,0,1.5-0.7,1.5-1.5V3.8C21.8,2.9,21.1,2.3,20.3,2.3z 
          M8.3,4.1v1.8v2.4H4.1L8.3,4.1z M20.3,20.3h-12H3.8V9.8h4.5c0.8,0,1.5-0.7,1.5-1.5V3.8h10.5V20.3z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page', 24, content, attrs);
