# HCL Software Enchanted Icons (Lit/Web Component Version)

Enchanted Icons is a collection of icons that are used in HCL Software products. This package exposes own creations as well as external icons derived from the [@carbon/icons](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) package and exposes them as framework-agnostic Lit-based Web Components.

(C) 2025 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)


## ⬇️ Installation

```sh
# NOTE: This is temporary and only for pre-release
# TODO: Update with final package name when published
npm install 'github:nhickogarachicohcl/enchanted-icons-web-component'
```

## Usage
Import the specific icon component(s) you need. They are standard Web Components and can be used in plain HTML or any framework that supports custom elements. You can check all the icons [here](https://nhickogarachicohcl.github.io/enchanted-icons/).

#### Using in a Lit component


```javascript
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
// Import icon like this
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/add'

@customElement('add-button')
class AddButton extends LitElement {
  render() {
    return html`
      <button type="button">
        <icon-add></icon-add>
        Save
      </button>
    `;
  }
}
```

#### Customization
You can customize the icons using the `size` and `color` attributes.

* size - Default size is `32`
```html
<icon-add size="16"></icon-add>
```
* color - accepts valid CSS color values (e.g., Hex, RGB, names)
```html
<icon-add color="blue"></icon-add>
```

## Development
We provide the following utility development commands:

| task | command | description |
|--|--|--|
| `install` | `npm ci` | Initial installation of the project dependencies. Run this to get started. |
| `generate` | `npm run generate` | Generate the icon component files from source data (using `node builder.cjs`). |
| `build` | `npm run build` | Builds the library package (compiles TS using `tsc`). |
| `build-icons-page` | `npm run build-icons-page` | Builds the static demo page using Vite. |
| `lint` | `npm run lint` | Run the linting task using ESLint (`eslint src`). |
| `lint-fix` | `npm run lint-fix` | Run ESLint and automatically fix fixable issues (`eslint --fix src`). |
| `dev` | `npm run dev` | Starts the local development server using Vite for viewing icons. |

#### Customizing Carbon Icon Generation
The `npm run generate` command executes the `builder.cjs` script, which reads icon data from `@carbon/icons` and generates the corresponding Lit component files in the `src/` directory.

You can customize which icons are generated and how some are named by modifying the `carbon-config.json` file.

##### `carbon-config.json` Structure:

* `include` (boolean):

  * If `true`, the `icons` array acts as an **include list** (only icons listed will be generated).

  * If `false`, the `icons` array acts as an **exclude list** (all icons except those listed will be generated).

* `icons` (string[]): An array of Carbon icon names (e.g., `"add"`, `"arrow-right"`) to be included or excluded based on the `include` flag.

* `renames` (object): A key-value map where the key is the original Carbon icon name and the value is the new name you want the generated component to use.

##### To apply changes:

1. Modify the `include`, `icons`, and/or `renames` sections in `carbon-config.json`.

2. Run `npm run generate` again to regenerate the component files based on the updated configuration.

3. Run `npm run build` if necessary to recompile the TypeScript.

#### Adding Custom Icons
You can add your own custom SVG icons to the library alongside the Carbon-derived ones.

1. Create a new TypeScript file for your icon under the `src/apps/es/<icon-name>/` directory (e.g., `src/apps/es/my-icon/index.ts`). Use the following template structure:

```javascript
/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 * *
 * [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)                               *
 * *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
// NOTE: Update import based on file location.
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';

// --- Define your custom SVG data ---
const attrs: IIconAttrs = {
  xmlns: '[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)',
  viewBox: '0 0 32 32',
};

const content: IIconContent[] = [
  // Add your path/circle/etc. data here
  {
    elem: 'path',
    attrs: {
      d: 'M10 10 L20 20 ...',
    },
  },
  // Add more elements if needed
];
// --- End custom SVG data ---

// --- Define custom element tag name ---
// Use 'icon' for prefix
export const ICON_NAME = 'icon-my-icon'; // CHANGE THIS
// --- End custom element tag name ---

// JUST COPY THIS PART
@customElement(ICON_NAME)
export class WebComponentIcon extends BaseIcon {
  render() {
    return html`${createSvgIcon(content, attrs)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}
```
3. Run `npm run build` to compile your new TypeScript component file into the `dist` directory.