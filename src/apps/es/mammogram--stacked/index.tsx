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
        'M30,16H28V4H16V2H28a2.0023,2.0023,0,0,1,2,2Z',
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
        'M25,23H23V9H9V7H23a2.0023,2.0023,0,0,1,2,2Z',
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
        'M18,30H4a2.0023,2.0023,0,0,1-2-2V14a2.002,2.002,0,0,1,2-2H18a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,18,30ZM4,14V28H18.002L18,14Z',
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
        'M13,18h1V16H13a5.0083,5.0083,0,0,0-4.8989,4H7v2H8.1011A5.0083,5.0083,0,0,0,13,26h1V24H13a3,3,0,0,1,0-6Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('mammogram--stacked', 32, content, attrs);
