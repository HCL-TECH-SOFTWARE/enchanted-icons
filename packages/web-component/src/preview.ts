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
const carbonIconModules = import.meta.glob('./carbon/es/*/index.ts', { eager: true });
const customIconModules = import.meta.glob('./apps/es/*/index.ts', { eager: true });
const logoIconModules = import.meta.glob('./apps/logos/*/index.ts', { eager: true });

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
        wrapper.setAttribute('class', 'icon-wrapper');
        
        // Generate import string
        let importString = path.replace(/^\.\//, '/');
        importString = importString.replace(/\/index\.ts$/, '');

        const importStringSpan = document.createElement('span');
        importStringSpan.textContent = importString;
        importStringSpan.setAttribute('class', 'icon-import-string copy-on-click');
        importStringSpan.setAttribute('title', 'Copy');

        const iconElement = document.createElement(iconName);
        iconElement.setAttribute('id', iconName);

        const nameSpan: HTMLSpanElement = document.createElement('span');
        nameSpan.setAttribute('class', 'icon-name copy-on-click')
        nameSpan.textContent = `<${iconName}></${iconName}>`;
        nameSpan.setAttribute('title', 'Copy');

        wrapper.appendChild(importStringSpan);
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

// Add copy event handler
const copyOnClickElements = document.querySelectorAll('.copy-on-click');

copyOnClickElements.forEach(element => {
  element.addEventListener('click', async () => {
    const textToCopy = element.textContent?.trim() ?? '';

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        alert(`Copied "${textToCopy}"`);
      } catch(error) {
        console.error('Failed to copy text! ', error);
      }
    } else {
      console.error('Clipboard API is not available or context is insecure.');
    }
  })
})