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
        'M12.0605,4.5 L19.5605,12 L12.0605,19.5 L11,18.4395 L17.4395,12 L11,5.5605 L12.0605,4.5 Z M6.0605,4.5 L13.5605,12 L6.0605,19.5 L5,18.4395 L11.4395,12 L5,5.5605 L6.0605,4.5 Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('double-right', 24, content, attrs);
