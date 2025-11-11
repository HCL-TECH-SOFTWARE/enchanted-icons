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
        `M10.5 21.0002H6V3.00025H12V7.50025C12 7.89807 12.1581 8.2796 12.4394 8.56091C12.7207 8.84221 13.1022 9.00025 13.5 9.00025H18V10.5002H19.5V7.50025C19.5026 7.40168 19.4839 7.3037 19.4451 
        7.21307C19.4062 7.12244 19.3482 7.04131 19.275 6.97525L14.025 1.72525C13.9589 1.65205 13.8778 1.59403 13.7872 1.55518C13.6965 1.51634 13.5986 1.4976 13.5 1.50025H6C5.60218 1.50025 5.22067 
        1.65828 4.93936 1.93958C4.65806 2.22089 4.5 2.60242 4.5 3.00025V21.0002C4.5 21.3981 4.65806 21.7796 4.93936 22.0609C5.22067 22.3422 5.60218 22.5002 6 22.5002H10.5V21.0002ZM13.5 3.30025L17.7 
        7.50025H13.5V3.30025ZM19.5 18.4427L18 16.9427V15.0002H16.5V17.5577L18.4425 19.5002L19.5 18.4427ZM14.3333 21.6154C15.1966 22.1923 16.2116 22.5002 17.25 22.5002C18.6424 22.5002 19.9778 21.9471 
        20.9623 20.9625C21.9469 19.9779 22.5 18.6426 22.5 17.2502C22.5 16.2118 22.1921 15.1968 21.6152 14.3335C21.0383 13.4701 20.2184 12.7972 19.2591 12.3998C18.2998 12.0025 17.2442 11.8985 16.2258 
        12.1011C15.2074 12.3036 14.2719 12.8037 13.5377 13.5379C12.8035 14.2721 12.3035 15.2076 12.1009 16.226C11.8983 17.2444 12.0023 18.3 12.3996 19.2593C12.797 20.2186 13.4699 21.0385 14.3333 
        21.6154ZM15.1666 14.1322C15.7833 13.7201 16.5083 13.5002 17.25 13.5002C18.2446 13.5002 19.1984 13.8953 19.9017 14.5986C20.6049 15.3018 21 16.2556 21 17.2502C21 17.9919 20.7801 18.7169 20.368 
        19.3336C19.956 19.9503 19.3703 20.4309 18.6851 20.7147C17.9998 20.9986 17.2458 21.0728 16.5184 20.9281C15.791 20.7834 15.1228 20.4263 14.5983 19.9018C14.0739 19.3774 13.7167 18.7092 13.5721 
        17.9818C13.4274 17.2544 13.5016 16.5004 13.7855 15.8151C14.0693 15.1299 14.5499 14.5442 15.1666 14.1322Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('document-time', 24, content, attrs);
