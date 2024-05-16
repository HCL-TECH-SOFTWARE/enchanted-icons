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
        'M19.5 17.25H13.5V12.75C13.5 11.9216 14.1716 11.25 15 11.25H18V8.25H13.5V6.75H18C18.8284 6.75 19.5 7.42157 19.5 8.25V11.25C19.5 12.0784 18.8284 12.75 18 12.75H15V15.75H19.5V17.25Z',
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
        'M9 6.75V11.25H6V6.75H4.5V17.25H6V12.75H9V17.25H10.5V6.75H9Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('page--elements--h2', 24, content, attrs);
