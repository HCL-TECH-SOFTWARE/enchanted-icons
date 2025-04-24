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

/* auto generated file - do not edit */
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import Icon from '@carbon/icons/es/media--library/32';
import { toSVG } from '@carbon/icon-helpers';
import { kebabCase } from 'lodash';

const ICON_NAME = `icon-${kebabCase(Icon.name)}`;
@customElement(ICON_NAME)
export class WebComponentIcon extends LitElement {
  render() {
    return html`${toSVG({...Icon, attrs: { ...Icon.attrs, preserveAspectRatio: 'xMidYMid'}})}`;
  }
} 

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}
