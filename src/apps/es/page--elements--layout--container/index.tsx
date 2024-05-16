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
        'M3.75 21.7499H2.25V17.2499H3.75V18.7499H5.25V20.2499H3.75V21.7499Z',
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
        'M21.75 17.2499V21.7499H20.25V20.2499H18.75V18.7499H20.25V17.2499H21.75Z',
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
        'M6.75 18.7499H8.25V20.2499H6.75V18.7499Z',
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
        'M9.75 18.7499H11.25V20.2499H9.75V18.7499Z',
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
        'M12.75 18.7499H14.25V20.2499H12.75V18.7499Z',
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
        'M15.75 18.7499H17.25V20.2499H15.75V18.7499Z',
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
        `M20.25 2.24994C21.0784 2.24994 21.75 2.92151 21.75 3.74994V12.7499C21.75 13.5784 21.0784 14.2499 20.25 14.2499H3.75C2.92157 14.2499 2.25 13.5784 2.25 12.7499V3.74994C2.25 2.92151 2.92157
        2.24994 3.75 2.24994H20.25ZM20.25 3.74994H3.75V12.7499H20.25V3.74994Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('page--elements--layout--container', 24, content, attrs);
