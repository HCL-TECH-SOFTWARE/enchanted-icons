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
        'M21.75 13.5V15H2.25V13.5H21.75Z',
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
        'M13.5 18V19.5H2.25V18H13.5Z',
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
        'M5.25 4.5V5.50619C3.91996 5.57345 3.25493 6.27299 3.25493 7.60481L3.258 7.5H5.25V9C5.25 9.82843 4.57843 10.5 3.75 10.5H2.25V7.5L2.2562 7.23704C2.34298 5.41235 3.34091 4.5 5.25 4.5Z',
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
        'M9.75 4.5V5.50619C8.41995 5.57345 7.75493 6.27299 7.75493 7.60481L7.758 7.5H9.75V9C9.75 9.82843 9.07843 10.5 8.25 10.5H6.75V7.5L6.7562 7.23704C6.84298 5.41235 7.84091 4.5 9.75 4.5Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page--elements--quote', 24, content, attrs);
