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
        'M8.25 9.75V11.25H7.125V14.25H5.625V11.25H4.5V9.75H8.25Z',
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
        `M21 6.75C21.8284 6.75 22.5 7.42157 22.5 8.25V15.75C22.5 16.5784 21.8284 17.25 21 17.25H3C2.17157 17.25 1.5 16.5784 1.5 15.75V8.25C1.5 7.42157 2.17157 6.75 3 6.75H21ZM21
        8.25H3V15.75H21V8.25Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--elements--form--input', 24, content, attrs);
