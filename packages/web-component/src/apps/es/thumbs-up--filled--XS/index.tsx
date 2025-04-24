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
        `M16.5 20.9989C19.0516 20.9989 21 19.2675 21 17.2489C21 15.6621 21 13.4121 21 11.9999C20.9977 11.1398 20.78 10.3433 20.2178 9.78112C19.6526 9.21586 18.8656 8.99895 18
        8.99895H13.5V5.99894C13.5 5.11112 13.1966 3.8334 12.4092 3.26539C12.1367 3.06883 11.778 3.00233 11.42 2.99994C11.0626 2.99756 10.7058 3.05896 10.436 3.26446C9.98671 3.6067 9.80089
        4.14748 9.72324 4.58238L9.03533 8.43496L7.5 11.0447V20.9989H16.5Z`,
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
        'M6 11.9999H3V20.9999H6V11.9999Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('thumbs-up--filled--XS', 24, content, attrs);
