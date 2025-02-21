# datatables-tailwind-adapter

This package serves as an adapter for DataTables 2.*, which upgrades basic styling with Tailwind CSS classes.

> Works with Tailwind CSS 4!

Adapter uses 3 color palettes: `light`, `dark` and `primary`. Make sure you have defined CSS variables for each color in default palette `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`.

## Installation

```bash
npm i datatables-tailwind-adapter
```

## Before usage

Make sure you have installed DataTables and jQuery.

**CSS:**

```css
/* Import DataTables to your CSS file */
@import url('datatables.net-dt');
@import url('datatables.net-autofill-dt');
@import url('datatables.net-buttons-dt');
@import url('datatables.net-datetime');
@import url('datatables.net-colreorder-dt');
@import url('datatables.net-fixedcolumns-dt');
@import url('datatables.net-fixedheader-dt');
@import url('datatables.net-keytable-dt');
@import url('datatables.net-responsive-dt');
@import url('datatables.net-rowgroup-dt');
@import url('datatables.net-rowreorder-dt');
@import url('datatables.net-scroller-dt');
@import url('datatables.net-searchbuilder-dt');
@import url('datatables.net-searchpanes-dt');
@import url('datatables.net-select-dt');
@import url('datatables.net-staterestore-dt');

/* ... */
```

**JS:**

```js
// Import jQuery and DataTables to your JavaScript file
import jQuery from "jquery";

import jszip from 'jszip';
import pdfmake from 'pdfmake';
import DataTable from 'datatables.net-dt';
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-colreorder-dt';
import DateTime from 'datatables.net-datetime';
import 'datatables.net-fixedcolumns-dt';
import 'datatables.net-fixedheader-dt';
import 'datatables.net-keytable-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-rowgroup-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-scroller-dt';
import 'datatables.net-searchbuilder-dt';
import 'datatables.net-searchpanes-dt';
import 'datatables.net-select-dt';
import 'datatables.net-staterestore-dt';

// ...
```

## Usage

**CSS:**

```css
/* ... */

/* Import adapter to your Tailiwnd CSS file */
@import 'datatables-tailwind-adapter';

/* Add source (change path based on your .css file location) */
@source '../../node_modules/datatables-tailwind-adapter/extensions/*.js';

/* 
    Add `light`, `dark` and `primary` color variables
    for palette [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
*/
@theme {
    /* ... */

    --color-light-50: #ffffff;
    --color-light-100: #fefefe;
    --color-light-200: var(--color-gray-200);
    --color-light-300: var(--color-gray-300);
    --color-light-400: var(--color-gray-400);
    --color-light-500: var(--color-gray-500);
    --color-light-600: var(--color-gray-600);
    --color-light-700: var(--color-gray-700);
    --color-light-800: var(--color-gray-800);
    --color-light-900: var(--color-gray-900);
    --color-light-950: var(--color-gray-950);

    --color-dark-50: var(--color-slate-50);
    --color-dark-100: var(--color-slate-100);
    --color-dark-200: var(--color-slate-200);
    /* and so on ... */
}
```

**JS:**

```js
// ...

// Import adapter
import { TailwindAdapter } from 'datatables-tailwind-adapter';

// Run
new TailwindAdapter().build()
```

## Customization

If you want to customize adapter with your own classes, you can access prebuilt object `DataTabelT` and modify it as you wish:

```js
// ...

// Import adapter
import { TailwindAdapter } from 'datatables-tailwind-adapter';

// Initialize adapter
var adapter = new TailwindAdapter()

// Ex.: access buttons container and change layout to vertical
adapter.DataTableT.Buttons.defaults.dom.container.className = 'flex flex-col gap-y-4';

// Build styles
adapter.build();
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

