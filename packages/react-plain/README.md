# HCL Software Enchanted Icons React package

Enchanted Icons is a collection of icons that are used in HCL Software products. This package exposes own creations as well as external icons from the [Carbon Icons Package](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) as plain React components. It has **no dependency on Material-UI**; if you need MUI `SvgIcon` based icons use [`@hcl-software/enchanted-icons`](https://www.npmjs.com/package/@hcl-software/enchanted-icons) instead.

(C) 2026 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

## ⬇️ Installation

```sh
npm install @hcl-software/enchanted-icons-react
```

The package is an ES module and requires `react` >= 18 as peer dependency.

## Usage

Every icon is a separate entry point, there is no barrel file. This keeps bundles small.

```jsx
import CheckmarkIcon from '@hcl-software/enchanted-icons-react/carbon/es/checkmark';
import ButtonIcon from '@hcl-software/enchanted-icons-react/apps/es/elements/basic/button';

<CheckmarkIcon size={16} />
<CheckmarkIcon title="Done" />
```

TypeScript needs `"moduleResolution": "node16"`, `"nodenext"` or `"bundler"` to resolve the entry points.

**Always consult with your UX contact when using icons directly from this library.**

### Props

Icons accept all props of an SVG element (`React.SVGProps<SVGSVGElement>`), a `ref` and:

| Prop | Default | Description |
| :--- | :--- | :--- |
| `size` | `1em` | Width and height. A number is interpreted as px. |
| `title` | – | Accessible name. Without a `title` the icon is decorative and rendered with `aria-hidden="true"`. |

The icon is filled with `currentColor`, so it follows the CSS `color` of its parent. The `color` prop or a `style`/`className` can override it.

### Differences to `@hcl-software/enchanted-icons` (MUI)

- No `fontSize`, `color="success"` etc. theme props, use `size` and CSS instead.
- Imports are `@hcl-software/enchanted-icons-react/carbon/es/<name>` instead of `.../dist/carbon/es/<name>`.
- Icon names are identical in both packages.
