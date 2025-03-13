

export function AdapterConfig(
    elements = {
        // Form elements background, dropdowns
        bg: `bg-light-50 dark:bg-dark-700`,
        table: {
            // Table text 
            text: {
                head: `text-xs *:font-medium uppercase`,
                body: `text-sm`,
                foot: `text-xs *:font-medium uppercase`
            },
            // Table cell background
            cell: `!bg-light-50 dark:!bg-dark-800`,
            // Table cell behavior on hover
            hover: `group-hover:!bg-light-100 group-hover:dark:!bg-dark-700`,
            // Table cell behavior when selected
            selected: `group-[.selected]:!bg-primary-100 group-[.selected]:dark:!bg-primary-800 group-[.selected]:!border-primary-300 group-[.selected]:dark:!border-primary-500`,
            // Striped table
            striped: {
                // Striped columns (.striped-col)
                col: {
                    // Table cell background
                    cell: `group-[.striped-col]:even:!bg-light-100 group-[.striped-col]:dark:even:!bg-dark-700`,
                    // Table cell behavior on hover
                    hover: `group-[.striped-col:not(.selected):hover]:even:!bg-light-200 group-[.striped-col:not(.selected):hover]:dark:even:!bg-dark-600`,
                    // Table cell behavior when selected
                    selected: `group-[.striped-col.selected]:even:!bg-primary-200 group-[.striped-col.selected]:dark:even:!bg-primary-700`,
                    // Table cell behavior when reorder
                    reorder: `[.dtcr-moving-first]:!border-primary-300 [.dtcr-moving-last]:!border-primary-300 [.dtcr-moving-first]:dark:!border-primary-500 [.dtcr-moving-last]:dark:!border-primary-500`
                },
                // Striped rows (.striped-row)
                row: {
                    // Table cell background
                    cell: `group-[:nth-of-type(2n).striped-row]:!bg-light-100 group-[:nth-of-type(2n).striped-row]:dark:!bg-dark-700`,
                    hover: `group-[:nth-of-type(2n).striped-row:hover]:!bg-light-200 group-[:nth-of-type(2n).striped-row:hover]:dark:!bg-dark-600`
                },
            }
        },
        text: {
            // Text size
            size: `text-sm`,
            // Text colors
            emphasis: `text-gray-900 dark:text-white`,
            muted: `text-gray-500 dark:text-gray-400`
        },
        spacing: {
            // DT rows vertical space
            rows: `space-y-4`,
            // Flex/grid elements vertical space
            vertical: `gap-x-1`,
            // Flex/grid elements horizontal space
            horizontal: `gap-y-1`
        },
        border: {
            // Border radius
            radius: `rounded-lg`,
            // Border color
            color: `!border-b-light-200 !border-t-light-200 !border-l-light-200 !border-r-light-200 dark:!border-b-dark-600 dark:!border-t-dark-600 dark:!border-l-dark-600 dark:!border-r-dark-600`,
            // Focus ring
            focus: `focus:ring-1 focus:ring-primary-500 focus:border-primary-500`
        }
    }
) {
    // Compiled gap (vertical + horizontal)
    if (elements.spacing.gap == undefined) {
        elements.spacing.gap = `${elements.spacing.vertical} ${elements.spacing.horizontal}`;
    }

    // Preparing forms
    if (elements.forms == undefined) {
        elements.forms = {};
    }
    if (elements.forms.button == undefined) {
        elements.forms.button = {};
    }

    // Simple input field
    if (elements.forms.input == undefined) {
        elements.forms.input = `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size} ${elements.text.emphasis} block w-full p-2.5 dark:placeholder-gray-400 outline-none`;
    }

    // Search input field
    if (elements.forms.search == undefined) {
        elements.forms.search = `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size} ${elements.text.emphasis} block w-full p-2.5 dark:placeholder-gray-400 outline-none`;
    }

    // Select
    if (elements.forms.select == undefined) {
        elements.forms.select = `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size} ${elements.text.emphasis} block w-full p-2.5 outline-none`;
    }

    // Transaprent button (with or without border)
    // Defined only hover behaviour
    if (elements.forms.button.link == undefined) {
        elements.forms.button.link = `hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-75 ${elements.text.emphasis}`;
    }

    // Simple button (used almost everywhere)
    if (elements.forms.button.default == undefined) {
        elements.forms.button.default = `${elements.text.size} ${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.text.emphasis} py-2.5 px-5 font-medium focus:outline-none hover:bg-light-100 hover:text-dark-700 focus:z-10 focus:ring-4 focus:ring-light-100 dark:focus:ring-dark-700 dark:hover:bg-dark-600 dark:hover:text-light-300`;
    }

    return elements;
}