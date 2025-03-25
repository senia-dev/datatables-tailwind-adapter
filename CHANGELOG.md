# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.9] - 2025-03-25

### Added

- Added input border

## [1.0.8] - 2025-03-25

### Fixed

- Fixed bug with color-light-300 crashing adapter

## [1.0.7] - 2025-03-25

### Fixed

- Fixed bug in config build with custom values 

## [1.0.6] - 2025-03-23

### Added

- Added form elements disabled state to config

## [1.0.5] - 2025-03-14

### Added

- Added icons for SearchPanes controls (`search`, `clear`, `collapse`, `sort alphabetically`, `sort numerically`)
- Added classes for table row/cell decoration

### Changed

- Changed selected row highlighting from **background-color** to **inset-shadow**

## Fixed

- Fixed bug, when clear button in SearchPane did not cleared selection

## [1.0.4] - 2025-03-13

### Added

- Added more configuration for table text style

### Changed

- Search Pane pill colors update

## Fixed

- Fixed bug, when **.striped-col** did not work in `thead` and `tfoot`

## [1.0.3] - 2025-03-12

### Added

- Added **.striped-col** and **.striped-row** support for table rows

### Changed

- Basic config update: 
    - Text size variables separated
    - Table config created
- Removed some custom CSS classes

## Fixed

- Fixed colors for dark mode
- Small code improvements

## [1.0.2] - 2025-02-26

### Added

- Test case
- More styling for buttons, `split` in particular

### Changed

- Button `alternative` renamed into `default`
- Removed `flex-nowrap` class from table head and footer cells
- Updated responsive behaviour for Search Panes

## Fixed

- Small code improvements

## [1.0.1] - 2025-02-25

### Added

- Added validation for DataTable extensions objects (`ext.classes`, `Buttons.defaults`, `Criteria.classes`, `Group.classes`, `SearchBuilder.classes`, `SearchPane.classes`, `SearchPanes.classes`)
- Added custom [config object][#config] during initialization

## Fixed

- Fixed unnecessary validation of unused adapter CSS variables
- Small code improvements

## [1.0.0] - 2025-02-21

### Added

- First upload

[#config]: ./structure/config.json