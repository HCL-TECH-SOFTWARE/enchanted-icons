# HCL Software Enchanted Icons package for Web Components

Enchanted Icons is a collection of icons that are used in HCL Software products. This package exposes own creations as well as external icons from the [Carbon React Icons Package](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) and exposes those as ready to use web components.

(C) 2024 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)


[![npm](https://nodei.co/npm/@hcl-software/enchanted-icons.png)](https://www.npmjs.com/package/@hcl-software/enchanted-icons)

## ⬇️ Installation

```sh
npm install @hcl-software/enchanted-icons-web-component
```
### Usage
Web Components can be used in any web framework or plain HTML.

**1. Import the icon definition**
You must first import the icon's JavaScript file to define the custom element. This is typically done once in your application's main entry point.
```javascript
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/rocket';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/app-switcher';
```

**2. Use the HTML tag**
Once defined, you can use the icon's custom HTML tag. The tag name is `icon-` followed by the icon's name (e.g., `icon-rocket`, `icon-app-switcher`).
```html
<icon-rocket></icon-rocket>
```

Icons with double dash in their name like `chevron--up` will use single dash in their component name.
```javascript
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--up';

// Usage
<icon-chevron-up></icon-chevron-up>
```

**Styling (Size and Color)**
You can style the icons by setting the `size` and `color` properties on the element.

**As HTML attributes:**
```html
<icon-rocket size="32"></icon-rocket>

<icon-app-switcher color="blue"></icon-app-switcher>
```

**As JavaScript properties:**
```javascript
const myIcon = document.querySelector('icon-rocket');
myIcon.size = 24;
myIcon.color = 'var(--my-theme-color)';
```

**With CSS Custom Properties (Advanced):**
The icons are styled internally with CSS Custom Properties. You can override these variables globally to set a theme for all icons.
```css
/* Set a default theme size and color for all icons on the page */
body {
  --icon-theme-size: 24px;
  --icon-theme-color: #3d3d3d;
}
```