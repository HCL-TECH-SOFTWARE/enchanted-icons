# Changelog

## Unreleased

### Added
- Added a new custom icon:
  ai--sparkle
  items--search--initial

### Fixed

### Changed
- The repository has been converted to a monorepo structure to support multiple packages.
- Introduced a new package, @hcl-software/enchanted-icons-web-component, to provide icons as standard Web Components. The original React package is still @hcl-software/enchanted-icons.
- Created a new unified build script (packages/icons-builder/generate.js) that generates both React and Web Component packages from a single source.
- Added raw .svg files located in packages/icons-builder/svg used for generating custom icons.
- All Carbon icon exclusions and renames are now managed in a single packages/icons-builder/config.json file.
- Introduced lerna for managing the monorepo structure.

#### Breaking changes

## 1.6.0

### Added
- Added a new custom icon:
  ai--sparkle

## 1.5.0

### Added
- introduced an excluded icon:
  return

## 1.4.0

### Added
- Added 2 new custom icons:
  Sort--descending--alt, Sort-ascending--alt

### Changed
-'The "page-add" icon is deprecated and will be removed in future releases. Please use "page--add" instead.'

## 1.3.0

### Added
- Added 3 new custom icons:
  video--syncing, video--error, video--synced

## 1.2.0

### Added
- Added 71 new custom icons:
  calendar--bullhorn, calendar--meeting, caret--sort--alt, checkbox--indeterminate--alt, chevron--double--left, chevron--double--right, cloud-satellite--config--filled, content--reference, content-item--filled, content-view--alt, data-component, data-text, data-variable, document--draft, document--warning, element--add, exit--alt, footer, footer--content, full--screen, full--screen--exit, header, header--content, id, images, layers--alt, layers--filled, layers--hidden, layout--off, layout--on, list--time, meetingchat, page--add, page--checked, page--draft, page--elements--content-container, page--elements--content-list, page--elements--content-list--no-result, page--elements--content-list-item, page--elements--data-container, page--elements--form, page--elements--form--button, page--elements--form--input, page--elements--form--label, page--elements--form--text-area, page--elements--h1, page--elements--h2, page--elements--h3, page--elements--h4, page--elements--h5, page--elements--h6, page--elements--layout--body, page--elements--layout--column--item, page--elements--layout--columns, page--elements--layout--container, page--elements--layout--section, page--elements--list, page--elements--list--item, page--elements--navigation, page--elements--paragraph, page--elements--quote, page--elements--typed, page--time, raise--hand, replace, security--alt, thumbs-up--filled--XS, thumbs-up--XS, user--password, view--actual--size, workspace--alt

## 1.1.0

### Added
- Added a new custom icon - items--search--empty
- added pr checks

## 1.0.0

### Added
Initial release.
