export function insertSearchPanes(elements) {
    return {
        clear: `dtsp-clear`,
        clearAll: `sm:ms-auto ${elements.forms.button.default}`,
        collapseAll: elements.forms.button.default,
        container: `flex flex-col sm:flex-row flex-wrap justify-between ${elements.spacing.gap}`,
        disabledButton: `!cursor-not-allowed opacity-25`,
        emptyMessage: `dtsp-emptyMessage`,
        hide: `dtsp-hidden`,
        panes: `dtsp-panesContainer`,
        search: `dtsp-search`,
        showAll: elements.forms.button.default,
        title: `${elements.table.text.body} text-primary-500 dark:text-primary-400 font-medium text-start`,
        titleRow:
            `flex flex-col sm:flex-row sm:items-center justify-between ${elements.spacing.gap} mb-4 border ${elements.border.color} p-4 ${elements.border.radius}`,
    };
}
