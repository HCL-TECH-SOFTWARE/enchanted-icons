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
        'M18 18.1275L15.3075 15.4425L14.25 16.5L18.75 21L23.25 16.5L22.1925 15.4425L19.5 18.1275V4.5C19.5 4.10218 19.3419 3.72067 19.0606 3.43936C18.7793 3.15806 18.3978 3 18 3H12.75V4.5H18V18.1275Z',
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
        'M4.5 5.87247V19.5C4.5 19.8978 4.65806 20.2793 4.93936 20.5606C5.22067 20.8419 5.60217 21 6 21H11.25V19.5H6V5.87247L8.69252 8.55753L9.75 7.5L5.25 3L0.75 7.5L1.80748 8.55753L4.5 5.87247Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('replace', 24, content, attrs);
