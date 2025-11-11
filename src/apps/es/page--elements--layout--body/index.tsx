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
        `M20.25 2.24994C21.0784 2.24994 21.75 2.92151 21.75 3.74994V20.2499C21.75 21.0784 21.0784 21.7499 20.25 21.7499H3.75C2.92157 21.7499 2.25 21.0784 2.25 20.2499V3.74994C2.25 2.92151 2.92157
        2.24994 3.75 2.24994H20.25ZM20.25 18.7499H3.75V20.2499H20.25V18.7499ZM20.25 6.74994H3.75V17.2499H20.25V6.74994ZM20.25 3.74994H3.75V5.24994H20.25V3.74994Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--elements--layout--body', 24, content, attrs);
