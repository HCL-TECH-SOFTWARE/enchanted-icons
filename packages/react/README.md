# HCL Software Enchanted Icons package

Enchanted Icons is a collection of icons that are used in HCL Software products. This package exposes own creations as well as external icons from the [Carbon React Icons Package](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) and exposes those as ready to use Material-UI components.

(C) 2024 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)


[![npm](https://nodei.co/npm/@hcl-software/enchanted-icons.png)](https://www.npmjs.com/package/@hcl-software/enchanted-icons)

## ⬇️ Installation

```sh
npm install @hcl-software/enchanted-icons
```
## Usage

In most cases, the Enchanted Components use the correct icons to adhere to the Enchanted design language; however, there may be valid reasons to use
icons directly from this library. **Always consult with your UX contact when using icons directly from this library.**

### Examples

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
