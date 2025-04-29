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

export const ICON_NAME = 'svg-verse';
@customElement(ICON_NAME)
export class SvgVerse extends BaseIcon {
  static styles = css`
    .verse_svg__gray_path {
      fill: var(--svg-verse-fill, #8D8D8D); /* Use CSS var with fallback */
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
            x1="0%"
            y1="49.995%"
            x2="100.004%"
            y2="49.995%"
            id="verse_svg__b"
          >
            <stop stop-color="#BDD62F" offset="0%" />
            <stop stop-color="#00AFBC" offset="100%" />
          </linearGradient>
          <path
            id="verse_svg__a"
            d="M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z"
          />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            class="verse_svg__gray_path"
            d="M16.49 4l-3.471 7.705.03 4.506 4.533 4.304z"
          />
          <g transform="translate(4 3.515)">
            <mask id="verse_svg__c" fill="#fff">
              <use href="#verse_svg__a"></use>
              </mask>
            <path
              fill="url(#verse_svg__b)"
              mask="url(#verse_svg__c)"
              d="M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z"
            />
          </g>
        </g>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: SvgVerse;
  }
}

