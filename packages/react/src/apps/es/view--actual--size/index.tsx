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
        'M10.5 6H6V10.5H7.5V7.5H10.5V6Z',
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
        'M18 6V10.5H16.5V7.5H13.5V6L18 6Z',
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
        'M13.5 18H18V13.5H16.5V16.5H13.5V18Z',
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
        'M6 18L6 13.5H7.5V16.5H10.5V18H6Z',
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
        `M19.5 21H4.5C4.10232 20.9995 3.72105 20.8414 3.43984 20.5602C3.15864 20.279 3.00046 19.8977 3 19.5V4.5C3.00046 4.10232 3.15864 3.72105 3.43984 3.43984C3.72105 3.15864 4.10232
        3.00046 4.5 3H19.5C19.8977 3.00046 20.279 3.15864 20.5602 3.43984C20.8414 3.72105 20.9995 4.10232 21 4.5V19.5C20.9995 19.8977 20.8414 20.279 20.5602 20.5602C20.279 20.8414 19.8977
        20.9995 19.5 21ZM4.5 4.5V19.5H19.5009L19.5 4.5H4.5Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('view--actual--size', 24, content, attrs);
