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

export const ICON_NAME = 'svg-connections';
@customElement(ICON_NAME)
export class SvgConnections extends LitElement {
  static styles = css`
    .connections_svg__st0{
      fill-rule:evenodd;
      clip-rule:evenodd;
      fill:#8d8d8d
    }
  `
  render() {
    return html`
      <svg
        part="svg-root"
        id="connections_svg__Layer_1"
        x="0"
        y="0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xml:space="preserve"
      >
        <defs>
          <linearGradient
            id="connections_svg__SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="101.067"
            y1="8.787"
            x2="108.934"
            y2="8.787"
            gradientTransform="matrix(1 0 -.4132 1 -92.34 0)"
          >
            <stop offset="0.124" stop-color="#652d90" />
            <stop offset="0.138" stop-color="#6a2c8d" />
            <stop offset="0.268" stop-color="#912678" />
            <stop offset="0.402" stop-color="#b22166" />
            <stop offset="0.539" stop-color="#cc1d58" />
            <stop offset="0.681" stop-color="#de1a4e" />
            <stop offset="0.831" stop-color="#e91948" />
            <stop offset="1" stop-color="#ec1846" />
          </linearGradient>
          <linearGradient
            id="connections_svg__SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="104.125"
            y1="11.058"
            x2="106.048"
            y2="17.122"
            gradientTransform="matrix(1 0 -.4132 1 -92.34 0)"
          >
            <stop offset="0.124" stop-color="#652d90" />
            <stop offset="0.138" stop-color="#6a2c8d" />
            <stop offset="0.268" stop-color="#912678" />
            <stop offset="0.402" stop-color="#b22166" />
            <stop offset="0.539" stop-color="#cc1d58" />
            <stop offset="0.681" stop-color="#de1a4e" />
            <stop offset="0.831" stop-color="#e91948" />
            <stop offset="1" stop-color="#ec1846" />
          </linearGradient>
          <linearGradient
            id="connections_svg__SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="106.837"
            y1="16.68"
            x2="113.686"
            y2="16.68"
            gradientTransform="matrix(1 0 -.4132 1 -92.34 0)"
          >
            <stop offset="0.124" stop-color="#652d90" />
            <stop offset="0.138" stop-color="#6a2c8d" />
            <stop offset="0.268" stop-color="#912678" />
            <stop offset="0.402" stop-color="#b22166" />
            <stop offset="0.539" stop-color="#cc1d58" />
            <stop offset="0.681" stop-color="#de1a4e" />
            <stop offset="0.831" stop-color="#e91948" />
            <stop offset="1" stop-color="#ec1846" />
          </linearGradient>
          <linearGradient
            id="connections_svg__SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="-516.687"
            y1="-888.212"
            x2="-514.597"
            y2="-881.621"
            gradientTransform="matrix(-.8403 .8243 -.6501 -.5257 -992.89 -33.474)"
          >
            <stop offset="0.124" stop-color="#652d90" />
            <stop offset="0.138" stop-color="#6a2c8d" />
            <stop offset="0.268" stop-color="#912678" />
            <stop offset="0.402" stop-color="#b22166" />
            <stop offset="0.539" stop-color="#cc1d58" />
            <stop offset="0.681" stop-color="#de1a4e" />
            <stop offset="0.831" stop-color="#e91948" />
            <stop offset="1" stop-color="#ec1846" />
          </linearGradient>
        </defs>
        <path
          class="connections_svg__st0"
          d="M20.77 9.65l-1.69-5.18-5.05 7.3z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="url(#connections_svg__SVGID_1_)"
          d="M10.43 5.38L3.69 12.2l9.19-3.21z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="url(#connections_svg__SVGID_2_)"
          d="M3.98 13.51l1.04 5.67 5.15-7.67z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="url(#connections_svg__SVGID_3_)"
          d="M9.86 14.16l-3.29 5.03 6.84.01z"
        />
        <path
          class="connections_svg__st0"
          d="M13.38 19.2l6.55-6.12-8.92 2.8z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="url(#connections_svg__SVGID_4_)"
          d="M19.06 4.47l-7.51-.07 3.84 5.35z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: SvgConnections;
  }
}

