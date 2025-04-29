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
import { css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from "../constants";

export abstract class BaseIcon extends LitElement {
  @property({type: Number, reflect: true})
  size = DEFAULT_ICON_SIZE;

  @property({type: String, reflect: true})
  color = DEFAULT_ICON_COLOR;

  static styles = css`
    :host {
      color: inherit;
    }
  `
  
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    const svgElement = this.shadowRoot?.querySelector('svg');
    if (changedProperties.has('size')) {
      if (svgElement) {
        svgElement.setAttribute('width', this.size.toString());
        svgElement.setAttribute('height', this.size.toString());
      }
    }

    if (changedProperties.has('color')) {
      if (svgElement) {
        svgElement.style.fill = this.color;
      }
    }
  }
}