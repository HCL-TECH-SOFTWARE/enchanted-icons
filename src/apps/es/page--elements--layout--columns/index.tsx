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
        `M21 20.2499C21 21.0784 20.3284 21.7499 19.5 21.7499H15C14.1716 21.7499 13.5 21.0784 13.5 20.2499V3.74994C13.5 2.92151 14.1716 2.24994 15 2.24994H19.5C20.3284 2.24994 21 2.92151 21
        3.74994V20.2499ZM19.5 20.2499V3.74994H15V20.2499H19.5Z`,
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
        `M10.5 20.2499C10.5 21.0784 9.82843 21.7499 9 21.7499H4.5C3.67157 21.7499 3 21.0784 3 20.2499V3.74994C3 2.92151 3.67157 2.24994 4.5 2.24994H9C9.82843 2.24994 10.5 2.92151 10.5
        3.74994V20.2499ZM9 20.2499V3.74994H4.5V20.2499H9Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--elements--layout--columns', 24, content, attrs);
