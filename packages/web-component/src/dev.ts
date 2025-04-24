const iconModules = import.meta.glob('./carbon/es/*/index.ts', { eager: true });

console.log('Loaded icons:', iconModules);

const carbonIconContainer = document.getElementById('carbon-icons-container');

if (carbonIconContainer) {
  for (const path in iconModules) {
    const module = iconModules[path];
    
    if (module && typeof module.ICON_NAME === 'string') {
      const iconName = module.ICON_NAME;

      const wrapper = document.createElement('div');
      wrapper.setAttribute('icon-name', iconName);
      wrapper.style.border = '1px solid #eee';
      wrapper.style.padding = '5px';
      
      const iconElement = document.createElement(iconName);
      const nameSpan: HTMLSpanElement = document.createElement('span');
      nameSpan.textContent = iconName;
      nameSpan.style.fontSize = '10px';
      nameSpan.style.display = 'block';
      nameSpan.style.marginTop = '3px';

      wrapper.appendChild(iconElement);
      wrapper.appendChild(nameSpan);
      carbonIconContainer.appendChild(wrapper);
    }
  }
}