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
import './apps/logos/connections'
import './apps/logos/portal'
import './apps/logos/sametime'
import './apps/logos/verse'

const carbonIconModules = import.meta.glob('./carbon/es/*/index.ts', { eager: true });
const customIconModules = import.meta.glob('./apps/es/*/index.ts', { eager: true });
const logoIconModules = import.meta.glob('./apps/logos/*.ts', { eager: true });

console.log('Loaded Carbon icons:', carbonIconModules);
console.log('Loaded Custom icons:', customIconModules)
console.log('Loaded Logo icons:', logoIconModules);

const carbonIconContainer = document.getElementById('carbon-icons-container');
const customIconContainer = document.getElementById('custom-icons-container');
const logosIconContainer = document.getElementById('logos-icons-container');

const populateIconContainer = (iconModules: Record<string, { ICON_NAME: string }>, container: HTMLElement | null) => {
  if (container) {
    for (const path in iconModules) {
      const module = iconModules[path];
      
      if (module && typeof module.ICON_NAME === 'string') {
        const iconName = module.ICON_NAME;
  
        const wrapper = document.createElement('div');
        wrapper.setAttribute('icon-name', iconName);
        wrapper.style.border = '1px solid #eee';
        wrapper.style.padding = '5px';
        
        const iconElement = document.createElement(iconName);
        iconElement.style.color = "rgb(5, 80, 220)";
        const nameSpan: HTMLSpanElement = document.createElement('span');
        nameSpan.textContent = iconName;
        nameSpan.style.fontSize = '10px';
        nameSpan.style.display = 'block';
        nameSpan.style.marginTop = '3px';
  
        wrapper.appendChild(iconElement);
        wrapper.appendChild(nameSpan);
        container.appendChild(wrapper);
      }
    }
  }
}

populateIconContainer(carbonIconModules, carbonIconContainer);
populateIconContainer(customIconModules, customIconContainer);
populateIconContainer(logoIconModules, logosIconContainer);

