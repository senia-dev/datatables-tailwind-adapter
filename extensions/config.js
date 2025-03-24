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
            selected: `group-[.selected]:!border-primary-300 group-[.selected]:dark:!border-primary-500 group-[.selected]:inset-shadow-[0_0_0_200px] group-[.selected]:inset-shadow-primary-200 group-[.selected]:dark:inset-shadow-primary-900 group-[.selected:hover]:inset-shadow-primary-300 group-[.selected:hover]:dark:inset-shadow-primary-800`,
            // Striped table
            striped: {
                // Striped columns (.striped-col)
                col: {
                    // Table cell background
                    cell: `group-[.striped-col]:even:!bg-light-100 group-[.striped-col]:dark:even:!bg-dark-700`,
                    // Table cell behavior on hover
                    hover: `group-[.striped-col:not(.selected):hover]:even:!bg-light-200 group-[.striped-col:not(.selected):hover]:dark:even:!bg-dark-600`,
                    // Table cell behavior when selected
                    selected: `group-[.striped-col.selected]:even:inset-shadow-primary-300 group-[.striped-col.selected]:dark:even:inset-shadow-primary-800 group-[.striped-col.selected:hover]:even:inset-shadow-primary-400 group-[.striped-col.selected:hover]:dark:even:inset-shadow-primary-700`,
                    // Table cell behavior when reorder
                    reorder: `[.dtcr-moving-first]:!border-primary-300 [.dtcr-moving-last]:!border-primary-300 [.dtcr-moving-first]:dark:!border-primary-500 [.dtcr-moving-last]:dark:!border-primary-500`
                },
                // Striped rows (.striped-row)
                row: {
                    // Table cell background
                    cell: `group-[:nth-of-type(2n).striped-row]:!bg-light-100 group-[:nth-of-type(2n).striped-row]:dark:!bg-dark-700`,
                    // Table cell behavior on hover
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
            vertical: `gap-x-1.5`,
            // Flex/grid elements horizontal space
            horizontal: `gap-y-1.5`
        },
        border: {
            // Border radius
            radius: `rounded-lg`,
            // Border color
            color: `!border-b-light-200 !border-t-light-200 !border-l-light-200 !border-r-light-200 dark:!border-b-dark-600 dark:!border-t-dark-600 dark:!border-l-dark-600 dark:!border-r-dark-600`,
            // Focus ring
            focus: `focus:ring-1 focus:ring-primary-500 focus:border-primary-500`
        },
        forms: {
            // Form elements disabled state
            disabled: `opacity-25 !pointer-events-none`
        }
    }
) {
    return elements;
}