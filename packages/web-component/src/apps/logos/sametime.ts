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

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export const ICON_NAME = 'svg-sametime';
@customElement(ICON_NAME)
export class SvgSametime extends LitElement {
  static styles = css`
    .sametime_svg__gray_path {
      fill: var(--svg-sametime-fill, #8D8D8D); /* Use CSS var with fallback */
    }
  `
  render() {
    return html`
  <svg
        part="svg-root"
        width="24"
        height="24}"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="50.001%"
            x2="100.001%"
            y2="50.001%"
            id="sametime_svg__b"
          >
            <stop stop-color="#EB1746" offset="0%" />
            <stop stop-color="#F48212" offset="100%" />
          </linearGradient>
          <path
            id="sametime_svg__a"
            d="M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z"
          />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            class="sametime_svg__gray_path"
            d="M13.81 5l-1.54 3.448h5.58l-3.104 6.898 5.57-.012-1.464-1.514L22.814 5z"
          />
          <g transform="translate(2 7.867)">
            <mask id="sametime_svg__c" fill="#fff">
              <use href="#sametime_svg__a"></use>
              </mask>
            <path
              fill="url(#sametime_svg__b)"
              mask="url(#sametime_svg__c)"
              d="M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z"
            />
          </g>
        </g>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: SvgSametime;
  }
}

