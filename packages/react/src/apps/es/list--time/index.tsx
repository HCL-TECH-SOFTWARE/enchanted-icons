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
        'M16.5 4.5H3V6H16.5V4.5Z',
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
        'M16.5 9H3V10.5H16.5V9Z',
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
        'M10.5 13.5H3V15H10.5V13.5Z',
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
        'M10.5 18H3V19.5H10.5V18Z',
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
        'M19.5 18.4425L18 16.9425V15H16.5V17.5575L18.4425 19.5L19.5 18.4425Z',
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
        `M14.3333 21.6152C15.1966 22.1921 16.2116 22.5 17.25 22.5C18.6424 22.5 19.9778 21.9469 20.9623 20.9623C21.9469 19.9777 22.5 18.6424 22.5 17.25C22.5 16.2117 22.1921 15.1966 21.6152
        14.3333C21.0383 13.4699 20.2184 12.797 19.2591 12.3996C18.2998 12.0023 17.2442 11.8983 16.2258 12.1009C15.2074 12.3035 14.2719 12.8035 13.5377 13.5377C12.8035 14.2719 12.3035 15.2074
        12.1009 16.2258C11.8983 17.2442 12.0023 18.2998 12.3996 19.2591C12.797 20.2184 13.4699 21.0383 14.3333 21.6152ZM15.1666 14.132C15.7833 13.7199 16.5083 13.5 17.25 13.5C18.2446 13.5
        19.1984 13.8951 19.9017 14.5984C20.6049 15.3016 21 16.2554 21 17.25C21 17.9917 20.7801 18.7167 20.368 19.3334C19.956 19.9501 19.3703 20.4307 18.6851 20.7145C17.9998 20.9984 17.2458
        21.0727 16.5184 20.928C15.791 20.7833 15.1228 20.4261 14.5983 19.9017C14.0739 19.3772 13.7167 18.709 13.5721 17.9816C13.4274 17.2542 13.5016 16.5002 13.7855 15.8149C14.0693 15.1297
        14.5499 14.5441 15.1666 14.132Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  },
];

export default createSvgIcon('list--time', 24, content, attrs);
