# datatables-tailwind-adapter

This package serves as an adapter for DataTables 2.*, which upgrades basic styling with Tailwind CSS classes.

> Works with Tailwind CSS 4!

Adapter uses 3 color palettes: `light`, `dark` and `primary`. Make sure you have defined CSS variables for each color in default palette `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`.

## Requirements

Make sure you've installed and imported **DataTables** (*vanilla styling*) and **jQuery** into your project.

## Installation

```bash
npm i datatables-tailwind-adapter
```

## Usage

**CSS:**

```css
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

Currently used colors (required):

| Color     | Number                                      |
|:----------|:--------------------------------------------|
| *light*   | 50, 100, 200, 300                           |
| *dark*    | 600, 700, 800, 900                          |
| *primary* | 100, 200, 300, 400, 500, 600, 700, 800, 900 |

**JS:**

```js
// Import adapter and execute
import { TailwindAdapter } from 'datatables-tailwind-adapter';

new TailwindAdapter().build()
```

## Customization

If you want to customize adapter with your own classes, you can define config while creating adapter, or access prebuilt object `DataTabelT` after initialization, and modify it as you wish.

### Configuration file

```js
// ...

new TailwindAdapter({
    bg: 'bg-white dark:bg-gray-950',
    text: {
        size: {
            table: 'text-sm'
        }
    }
}).build();
```

While defining new adapter, you can add some configuration variables. Adapter **config** containts 2 parts: 

**First:**
```js
{
    // First one is basic. 
    // It contains variables, which are used to generate elements for the second half of config:
    
    // Form elements background, dropdowns
    bg: `bg-light-50 dark:bg-dark-700`,
    text: {
        // Text size
        size: {
            table: 'text-sm',
            forms: 'text-sm'
        },
        // Text colors
        emphasis: `text-gray-900 dark:text-white`,
        muted: `text-gray-500 dark:text-gray-400`,
    },
    spacing: {
        // DT rows vertical space
        rows: 'space-y-4',
        // Flex/grid elements vertical space
        vertical: 'gap-x-2',
        // Flex/grid elements horizontal space
        horizontal: 'gap-y-2',
    },
    border: {
        // Border radius
        radius: `rounded-lg`,
        // Border color
        color: `border-light-200 dark:border-dark-600`,
        // Focus ring
        focus: `focus:ring-1 focus:ring-primary-500 focus:border-primary-500`
    }
}
```

**And second:**

```js
{
    // Basic config ...

    // Second one contains complex form elements and extra gap variable in `spacing`.
    // Those elements are meant to be compiled with variables from basic config.
    // 
    // But if you want them fully personalized, you can define them manually too. 
    
    spacing: {
        // ...

        gap: ""
    },
    forms: {
        input: "",
        search: "",
        select: "",
        button: {
            default: "",
            link: ""
        }
    }
}
```

[Click here][#config] to check default *config.js* file definition in **TailwindAdapter**.

> Don't forget to add *@source* path of your JS file into CSS with Tailwind initialization, so that framework could recognize your classes

### Prebuilt object tree

```js
// ...

// Initialize adapter
var adapter = new TailwindAdapter()

// Ex.: access buttons container and change layout to vertical
adapter.DataTableT.Buttons.defaults.dom.container.className = 'flex flex-col gap-y-4';

// Build styles
adapter.build();
```

Before building adapter, you can access DataTables extensions tree, called `DataTabelT` and change any compiled class as you wish. Missing keys will be completed with compiled ones, so if you want to remove class in any element, just define it as an empty string.

```js
// DataTabelT object tree

DataTabelT: {
    ext: {
        classes: /* ./extensions/default.js */
    },
    Buttons: {
        defaults: /* ./extensions/buttons.js */
    },
    Criteria: {
        classes: /* ./extensions/criteria.js */
    },
    Group: {
        classes: /* ./extensions/group.js */
    },
    SearchBuilder: {
        classes: /* ./extensions/searchBuilder.js */
    },
    SearchPane: {
        classes: /* ./extensions/searchPane.js */
    },
    SearchPanes: {
        classes: /* ./extensions/searchPanes.js */
    }
}
```

> Don't forget to add *@source* path of your JS file into CSS with Tailwind initialization, so that framework could recognize your classes

## Contributing

In case you want to help develop this little project (or you have some cool ideas or improvements :)), check out [CONTRIBUTING.md](./CONTRIBUTING.md).

Test case I am using currently: 

```js
// ...

import { TailwindAdapter } from 'datatables-tailwind-adapter';
import { defaults } from 'datatables-tailwind-adapter/tests/defaults';
import * as arrays from 'datatables-tailwind-adapter/tests/arrays.json'

new TailwindAdapter()build();

var table = new DataTable("#example", {
    columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" },
    ],
    data: arrays.data,
});
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.


[#config]: ./extensions/config.js