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
        'M21 5.25V3.75H1.5V5.25H21Z',
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
        'M11.25 8.25V6.75H1.5V8.25H11.25Z',
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
        'M6.75 15H17.25V16.5H6.75V15Z',
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
        `M3 20.25H21C21.3977 20.2496 21.779 20.0914 22.0602 19.8102C22.3414 19.529 22.4996 19.1477 22.5 18.75V12.75C22.4996 12.3523 22.3414 11.971 22.0602 11.6898C21.779 11.4086 21.3977 11.2504 21
        11.25H3C2.6023 11.2504 2.22101 11.4086 1.9398 11.6898C1.65859 11.971 1.50042 12.3523 1.5 12.75V18.75C1.50042 19.1477 1.65859 19.529 1.9398 19.8102C2.22101 20.0914 2.6023 20.2496 3 20.25ZM3
        18.75V12.75H21V18.75H3Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--elements--form--button', 24, content, attrs);
