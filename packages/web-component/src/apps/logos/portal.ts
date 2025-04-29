/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
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

import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseIcon } from '../../utils/base-icon';

export const ICON_NAME = 'svg-portal';
@customElement(ICON_NAME)
export class SvgPortal extends BaseIcon {
  static styles = css`
    .portal_svg__gray_path {
      fill: var(--svg-portal-fill, #8D8D8D); /* Use CSS var with fallback */
    }
  `
  render() {
    return html`
<svg
        part="svg-root"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="3.941%"
            y1="50.001%"
            x2="99.998%"
            y2="50.001%"
            id="portal_svg__b"
          >
            <stop stop-color="#6600AE" offset="0%" />
            <stop stop-color="#EB1746" offset="100%" />
          </linearGradient>
          <path
            id="portal_svg__a"
            d="M6.061.516l3.062 6.736L0 13.999h4.194l9.149-6.747L10.307.516z"
          />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 5.484)">
            <mask id="portal_svg__c" fill="#fff">
              <use href="#portal_svg__a"></use>
              </mask>
            <path
              fill="url(#portal_svg__b)"
              mask="url(#portal_svg__c)"
              d="M6.061.516l3.062 6.736L0 13.999h4.194l9.149-6.747L10.307.516z"
            />
          </g>
          <path
            class="portal_svg__gray_path"
            d="M14.703 6l2.14 4.804L23.369 6z"
          />
          <path
            class="portal_svg__gray_path"
            d="M9.546 19.484h7.833l-1.941-4.322z"
          />
        </g>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: SvgPortal;
  }
}

