import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
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
        'M18.75 3.75V20.25H17.25V3.75H18.75Z',
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
        'M14.25 6.75V8.25H11.25V17.25H9.75V8.25H6.75V6.75H14.25Z',
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export const ICON_NAME = 'icon-page-elements-typed';
@customElement(ICON_NAME)
export class WebComponentIcon extends LitElement {
  render() {
    return html`${createSvgIcon(content, attrs)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}
