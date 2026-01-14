/* ======================================================================== *
  * Copyright 2024-2026 HCL America Inc.                                          *
  * Licensed under the Apache License, Version 2.0 (the "License");          *
  * you may not use this file except in compliance with the License.         *
  * You may obtain a copy of the License at                                  *
  *                                                                          *
  * http://www.apache.org/licenses/LICENSE-2.0                               *
  *                                                                          *
  * Unless required by applicable law or agreed to in writing, software      *
  * distributed under the License is distributed on an "AS IS" BASIS,        *
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
  * See the License for the specific language governing permissions and      *
  * limitations under the License.                                           *
  * ======================================================================== */

/* auto generated file - do not edit */
import { html } from 'lit';
import { createSvgIcon, IIconAttrs, IIconContent, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';

const attrs: IIconAttrs = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d: 'M13.6901 14H10.3089L12 10.6179L13.6901 14ZM12 9C11.8042 9 11.6347 9.11255 11.5526 9.27635L9.05262 14.2764C9.01892 14.3438 8.99997 14.4197 8.99997 14.5C8.99997 14.7761 9.22382 15 9.49997 15H14.5C14.7761 15 15 14.7761 15 14.5C15 14.4309 14.986 14.3652 14.9607 14.3054L12.4472 9.27635C12.3652 9.11255 12.1957 9 12 9Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.99997 11.5C7.58577 11.5 7.24997 11.8358 7.24997 12.25C7.24997 12.6642 7.58577 13 7.99997 13C8.41417 13 8.74997 12.6642 8.74997 12.25C8.74997 11.8358 8.41417 11.5 7.99997 11.5Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M8.49997 6H7.49997V10.5H8.49997V6Z',
      fill: 'currentColor'
    }
  },
  {
    elem: 'path',
    attrs: {
      d: 'M7.49997 15H1.49997C1.32527 15 1.16317 14.9088 1.07262 14.7594C0.981917 14.6102 0.975817 14.4243 1.05637 14.2694L7.55637 1.76935C7.64242 1.6038 7.82122 1.5 7.99997 1.5C8.17872 1.5 8.35752 1.6038 8.44357 1.76935L11.4436 7.5386L10.5564 7.9999L7.99997 3.0838L2.32357 14H7.49997V15Z',
      fill: 'currentColor'
    }
  }
];

export const ICON_NAME = 'icon-event-warning';
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`${createSvgIcon(content, attrs)}`;
  }
}

if (canDefine && !customElements.get(ICON_NAME)) {
  customElements.define(ICON_NAME, WebComponentIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}