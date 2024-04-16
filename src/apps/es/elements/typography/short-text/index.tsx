/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

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
        `M13.5,18 L13.5,19.5 L2.25,19.5 L2.25,18 L13.5,18 Z M21.75,13.5 L21.75,15 L2.25,15 L2.25,13.5 L21.75,13.5 Z M6.75,4.5 L6.75,6 L5.25,6 L5.25,10.5 L3.75,10.5 L3.75,6 
          L2.25,6 L2.25,4.5 L6.75,4.5 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('short-text', 24, content, attrs);
