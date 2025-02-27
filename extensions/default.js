export function insertDefault(elements) {
    return {
        container: `dt-container ${elements.text.emphasis} ${elements.text.size.table} ${elements.spacing.rows} w-full`,
        empty: {
            row: `p-3 text-center ${elements.text.muted}`,
        },
        info: {
            container: `${elements.text.muted} text-wrap`,
        },
        layout: {
            row: `flex flex-col md:flex-row items-start md:items-center w-full justify-between ${elements.spacing.gap}`,
            cell: ``,
            tableRow: `dt-layout-table`,
            tableCell: ``,
            start: ``,
            end: ``,
            full: `w-full`,
        },
        length: {
            container: `flex flex-row justify-start items-center ${elements.spacing.gap} text-nowrap`,
            select: `${elements.forms.select} min-w-24`,
        },
        order: {
            canAsc: `dt-orderable-asc`,
            canDesc: `dt-orderable-desc`,
            isAsc: `dt-ordering-asc`,
            isDesc: `dt-ordering-desc`,
            none: `dt-orderable-none`,
            position: `sorting_`,
        },
        processing: {
            container: `dt-processing`,
        },
        scrolling: {
            body: `dt-scroll-body`,
            container: `dt-scroll !m-0`,
            footer: {
                self: `dt-scroll-foot`,
                inner: `dt-scroll-footInner`,
            },
            header: {
                self: `dt-scroll-head`,
                inner: `dt-scroll-headInner`,
            },
        },
        search: {
            container: `flex flex-row justify-start items-center ${elements.spacing.gap}`,
            input: `${elements.forms.search}`,
        },
        table: `dataTable`,
        tbody: {
            cell: `odd:bg-transparent even:bg-light-200/50 dark:even:bg-dark-900/50`,
            row: `hover:bg-light-300/50 dark:hover:bg-dark-700/50 border-b ${elements.border.color}`
        },
        thead: {
            cell: `text-xs *:font-medium uppercase ${elements.border.color}`,
            row: `border-b ${elements.border.color}`
        },
        tfoot: {
            cell: `text-xs *:font-medium uppercase ${elements.border.color}`,
            row: ``
        },
        paging: {
            active: `font-semibold bg-primary-600 dark:bg-primary-500 border-primary-700 dark:!border-primary-600 hover:!bg-primary-500 dark:hover:!bg-primary-400`,
            button:
                `relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 hover:z-10 focus:z-10 active:z-10 active:shadow-none ${elements.forms.button.link} ${elements.border.color}`,
            container: ``,
            disabled: `${elements.text.muted}`,
            nav: `dtta-pagination flex flex-nowrap`,
        },
    };
}
