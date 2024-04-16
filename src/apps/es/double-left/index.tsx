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
        'M11.5605,4.5 L19.0605,12 L11.5605,19.5 L10.5,18.4395 L16.9395,12 L10.5,5.5605 L11.5605,4.5 Z M5.5605,4.5 L13.0605,12 L5.5605,19.5 L4.5,18.4395 L10.9395,12 L4.5,5.5605 L5.5605,4.5 Z',
      fill: 'currentColor',
      stroke: 'none',
      transform: 'translate(11.780250, 12.000000) scale(-1, 1) translate(-11.780250, -12.000000)',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('double-left', 24, content, attrs);
