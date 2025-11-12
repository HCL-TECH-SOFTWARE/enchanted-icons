# HCL Software Enchanted Icons

Enchanted Icons is a collection of icons used in HCL Software products. This repository is a monorepo that provides two sets of icon packages:

1.  **React Components:** Ready-to-use Material-UI components for React applications.
2.  **Web Components:** Standard, framework-agnostic web components for use in any web application (Lit, Angular, Vue, plain HTML, etc.).

This package exposes HCL Software's own creations as well as icons from the [Carbon Icons Package](https://github.com/carbon-design-system/carbon/tree/main/packages/icons).

(C) 2024 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

[![npm](https://nodei.co/npm/@hcl-software/enchanted-icons.png)](https://www.npmjs.com/package/@hcl-software/enchanted-icons)
[![npm](https://nodei.co/npm/@hcl-software/enchanted-icons-web-component.png)](https://www.npmjs.com/package/@hcl-software/enchanted-icons-web-component)

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

## Development
This is a monorepo. To install dependencies for development, run `npm install` from within each package's directory (e.g., `packages/react`, `packages/web-component`, `packages/icons-builder`).

Other development commands (like those listed in the tables below) must also be run from within their respective package directories.

### Common Scripts
These scripts are available in both the React (@hcl-software/enchanted-icons) and Web Component (@hcl-software/enchanted-icons-web-component) packages.

| task | command | description |
|--|--|--|
| **Build** | `npm run build` | Compiles the package source code into a `dist` folder. |
| **Lints** | `npm run lint` | Runs the linter to check for code style issues. |
| **Lint (Fix)** | `npm run lint-fix` | Runs the linter and automatically fixes resolvable issues. |

This script is available in the internal `packages/icons-builder` package.

| task | command | description |
|--|--|--|
| **Generate** | `npm run generate` | Generates all React and Web Component icons from source SVG files. |

## Lerna Commands

This repository uses [Lerna](https://lerna.js.org/) for managing multiple packages. The most common commands are also wrapped in the root npm scripts:

| Command | Description |
|---------|-------------|
| `npm run ci` | Installs all dependencies in all packages. |
| `npm run build` | Runs the `build` script in all packages where it is defined. |
| `npm run lint` | Runs the `lint` script in all packages where it is defined. |
| `npm run generate` | Runs the `generate` script in the `icons-builder` package. |


## Icon Management Guide
All icon components are generated by a unified build script. **Do not edit the files in the package `src/` directories directly**, as they will be overwritten.

The `npm run generate` command in `packages/icons-builder` performs two main tasks:

1. **Builds Carbon Icons:** It reads from `@carbon/icons` and uses `packages/icons-builder/config.json` to exclude or rename icons.
2. **Builds Custom Icons:** It reads all `.svg` files from the `packages/icons-builder/svg` directory.

**How to Add a New Custom Icon Component**

1. **Go to the Icons Builder Directory**: Navigate to `packages/icons-builder/svg/`.
2. **Create a Directory:** Create a new directory named after your icon (e.g., `my-new-icon`). You can create nested folders (e.g., `new-feature/my-new-icon`) and the build script will preserve this structure.
3. **Add the SVG File:** Place your single `.svg` file inside this new directory (e.g., `my-new-icon/my-new-icon.svg`).
    - The build script uses the SVG's `width` attribute to determine its size. Your `<svg>` tag **must** include `width` and `height` attributes (e.g., `width="16"` `height="16"`).
    - The `viewBox` should also be set correctly (e.g., `viewBox="0 0 16 16"`).
4. **Run the Build:** Run `npm run generate`.
5. **Check the Output**: Your new icon component will be generated in:
    - `packages/react/src/apps/es/my-new-icon/index.tsx`
    - `packages/web-component/src/apps/es/my-new-icon/index.ts`

> **CRITICAL:** Each icon directory must contain only one `.svg` file (e.g., `my-new-icon/my-new-icon.svg`). The build script is not designed to handle multiple SVGs in a single directory.

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

  **Note on Precedence**: If a rename key exists in both `common.renames` and a platform-specific object (e.g., `react.renames` or `wc.renames`), the **platform-specific rename will be used** for that platform, overriding the `common` setting.
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

## Pull Request Guidelines

When submitting a pull request, it is essential to ensure that all generated files are up to date. This includes running the necessary build or generate commands to produce the latest versions of any files that are automatically generated by the build system.

### Why We Check In Generated Files

We choose to check in generated files into the repository for the following reasons:

1. **Transparency:** By including generated files in the repository, it is easier to see the exact changes introduced by a pull request. This ensures that reviewers can verify the impact of changes without needing to generate the files locally.

2. **Traceability:** Checking in generated files provides a clear history of changes over time. This is particularly useful for debugging or understanding how the generated output has evolved.

3. **Consistency:** Including generated files ensures that all contributors are working with the same versions of these files, reducing the risk of discrepancies caused by differences in local environments.


### What This Means for PRs

Before submitting a pull request, you must:

1. Run the appropriate command to generate all necessary files.
   ```sh
   npm ci
   npm run ci
   npm run generate
   ```
2. Verify that the generated files are included in your commit.
3. Ensure that the generated files reflect the latest changes in your branch.
