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

const SvgSametime = (props: SvgIconProps) => {
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
          y1="50.001%"
          x2="100.001%"
          y2="50.001%"
          id="sametime_svg__b"
        >
          <stop stopColor="#EB1746" offset="0%" />
          <stop stopColor="#F48212" offset="100%" />
        </linearGradient>
        <path
          id="sametime_svg__a"
          d="M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#8D8D8D"
          d="M13.81 5l-1.54 3.448h5.58l-3.104 6.898 5.57-.012-1.464-1.514L22.814 5z"
        />
        <g transform="translate(2 7.867)">
          <mask id="sametime_svg__c" fill="#fff">
            <use xlinkHref="#sametime_svg__a" />
          </mask>
          <path
            fill="url(#sametime_svg__b)"
            mask="url(#sametime_svg__c)"
            d="M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgSametime;
