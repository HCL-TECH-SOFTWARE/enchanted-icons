# HCL Software Enchanted Icons

Enchanted Icons is a collection of icons used in HCL Software products. This repository is a monorepo that provides two sets of icon packages:

1.  **React Components:** Ready-to-use Material-UI components for React applications.
2.  **Web Components:** Standard, framework-agnostic web components for use in any web application (Lit, Angular, Vue, plain HTML, etc.).

This package exposes HCL Software's own creations as well as icons from the [Carbon Icons Package](https://github.com/carbon-design-system/carbon/tree/main/packages/icons).

(C) 2024 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

## Packages

This repository contains the following packages:

| Package | Description |
| :--- | :--- |
| **`@hcl-software/enchanted-icons`** | React (Material-UI) components. |
| **`@hcl-software/enchanted-icons-web-component`** | Standard Web Components. |

## Installation

### React

```sh
npm install @hcl-software/enchanted-icons
```
### Web Components
```sh
npm install @hcl-software/enchanted-icons-web-component
```

## Usage

In most cases, the Enchanted Components use the correct icons to adhere to the Enchanted design language; however, there may be valid reasons to use
icons directly from this library. **Always consult with your UX contact when using icons directly from this library.**

### Usage (React)
The React icons are Material-UI `<SvgIcon>` components and support all of its props.

#### Icon size
```jsx
import CheckmarkIcon from '@hcl-software/enchanted-icons/dist/carbon/es/checkmark';
...
<CheckmarkIcon fontSize="small" />
```
or
```jsx
import CheckmarkIcon from '@hcl-software/enchanted-icons/dist/carbon/es/checkmark';
...
<CheckmarkIcon fontSize="16px" />
```

#### Icon color
```jsx
import CheckmarkIcon from '@hcl-software/enchanted-icons/dist/carbon/es/checkmark';
...
<CheckmarkIcon color="success" />
```
Note: It is strongly recommended to use the thematic names of colors of the Enchanted theme, rather than explicit rgba values. For example, `"success"` or `"action"`.  This ensures consistency of colors across the UI and over time.  

#### Icon button
A common pattern is to use an icon in conjunction with an Enchanted `<IconButton>`
```jsx
import IconButton from '@hcl-software/enchanted-react-components/dist/IconButton';
import RocketIcon from '@hcl-software/enchanted-icons/dist/carbon/es/rocket';
...
<IconButton size="small" aria-label="launch"><RocketIcon /></IconButton>
```
Note: In this case the size of the icon is determined by the `size` prop of the `<IconButton>`. The icon color is controlled by the different button states (active, disabled, etc) and should not be overriden.

### Advanced
Icons from this library can take any props supported by MUI's `<SvgIcon>` component. See https://v5.mui.com/material-ui/api/svg-icon/  
**Always consult with your UX contact before applying any advanced styling.**

### Usage (Web Components)
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

## Development

This repository is a monorepo. This project uses a root `makefile` to simplify common tasks.

We provide the following utility development commands, which should be run from the root of the project:

| task | command | description |
|--|--|--|
| **Install** | `make install` | Installs dependencies for all packages. |
| **Generate Icons** | `make generate` | Generates icon source code (.tsx, .ts) from .svg assets and carbon icons. |
| **Build All** | `make build` | Compiles all source code (including generated icons) into distributable `dist` folders. |
| **Lint All** | `make lint` | Runs the linter across all packages. |
| **Publish** | `make publish` | Publishes the React and Web Component packages to npm. |
| **Clean** | `make clean` | Removes all node_modules and dist folders from all packages. |

## Icon Management Guide
All icon components are generated by a unified build script. **Do not edit the files in the package `src/` directories directly**, as they will be overwritten.

The `make generate` command (which runs `packages/icons-builder/generate.js`) performs two main tasks:

1. **Builds Carbon Icons:** It reads from `@carbon/icons` and uses `packages/icons-builder/config.json` to exclude or rename icons.
2. **Builds Custom Icons:** It reads all `.svg` files from the `packages/icons-builder/svg` directory.

**How to Add a New Custom Icon**

1. **Go to the Icons Builder Directory**: Navigate to `packages/icons-builder/svg/`.
2. **Create a Directory:** Create a new directory named after your icon (e.g., `my-new-icon`). You can create nested folders (e.g., `new-feature/my-new-icon`) and the build script will preserve this structure.
3. **Add the SVG File:** Place your single `.svg` file inside this new directory (e.g., `my-new-icon/my-new-icon.svg`).
    - The build script uses the SVG's `width` attribute to determine its size. Your `<svg>` tag **must** include `width` and `height` attributes (e.g., `width="16"` `height="16"`).
    - The `viewBox` should also be set correctly (e.g., `viewBox="0 0 16 16"`).
4. **Run the Build:** Run `npm run generate` or from the repository root, run `make generate`.
5. **Check the Output**: Your new icon will be generated in:
    - `packages/react/src/apps/es/my-new-icon/index.tsx`
    - `packages/web-component/src/apps/es/my-new-icon/index.ts`

**How to Manage Carbon Icons (Exclude or Rename)**
To exclude or rename an icon from `@carbon/icons`, edit the `packages/icons-builder/config.json` file.
- **To Exclude an Icon:** Add the icon's original name (e.g., `"bee"`) to the `common.excludes` array. This will prevent it from being built for both React and Web Components.
```json
"common": {
  "excludes": [
    "bee",
    "bee-bat"
  ]
}
```
- **To Rename an Icon:** Add a key-value pair to one of the renames objects.
  - `common.renames`: Renames the icon for both React and Web Components.
  - `react.renames`: Renames the icon for React *only*.
  - `wc.renames`: Renames the icon for Web Components *only*.
```json
"common": {
  "renames": {
    "ibm-cloud--internet-services": "cloud--internet-services"
  }
},
"react": {
  "renames": {
    "ibm-security": "security--alt"
  }
},
"wc": {
  "renames": {
    "ibm-security": "security--alt-carbon"
  }
}

```