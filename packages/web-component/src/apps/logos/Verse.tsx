/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
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

import * as React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

const SvgVerse = (props: SvgIconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      // eslint-why Syntax is necessary for implementation
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <defs>
        <linearGradient
          x1="0%"
          y1="49.995%"
          x2="100.004%"
          y2="49.995%"
          id="verse_svg__b"
        >
          <stop stopColor="#BDD62F" offset="0%" />
          <stop stopColor="#00AFBC" offset="100%" />
        </linearGradient>
        <path
          id="verse_svg__a"
          d="M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#8D8D8D" d="M16.49 4l-3.471 7.705.03 4.506 4.533 4.304z" />
        <g transform="translate(4 3.515)">
          <mask id="verse_svg__c" fill="#fff">
            <use xlinkHref="#verse_svg__a" />
          </mask>
          <path
            fill="url(#verse_svg__b)"
            mask="url(#verse_svg__c)"
            d="M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgVerse;
