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
        `M21 11.25C21.8284 11.25 22.5 11.9216 22.5 12.75V18.75C22.5 19.5784 21.8284 20.25 21 20.25H3C2.17157 20.25 1.5 19.5784 1.5 18.75V12.75C1.5 11.9216 2.17157 11.25 3 11.25H21ZM21
        12.75H3V18.75H21V12.75Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
  {
    elem: 'path',
    attrs: {
      d:
        'M15 7.5V9H6.75V7.5H15Z',
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
        'M21 4.5V6H6.75V4.5H21Z',
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
        'M5.25 4.5V6H4.125V9H2.625V6H1.5V4.5H5.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page--elements--form--label', 24, content, attrs);
