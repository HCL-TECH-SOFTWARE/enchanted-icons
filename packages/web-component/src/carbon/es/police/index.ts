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
import Icon from '@carbon/icons/es/police/32';
import { toSVG } from '@carbon/icon-helpers';
import { BaseIcon } from '../../../utils/base-icon';
import { canDefine } from '../../../utils';

export const ICON_NAME = 'icon-police';
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`${toSVG({...Icon, attrs: { ...Icon.attrs, preserveAspectRatio: 'xMidYMid'}})}`;
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
