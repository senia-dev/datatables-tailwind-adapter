export default function (elements) {
    return {
        clear: `dtsp-clear`,
        clearAll: `sm:ms-auto ${elements.forms.button.alternative}`,
        collapseAll: elements.forms.button.alternative,
        container: `flex flex-col ${elements.spacing.gap}`,
        disabledButton: `!cursor-not-allowed opacity-25`,
        emptyMessage: `dtsp-emptyMessage`,
        hide: `dtsp-hidden`,
        panes: `dtsp-panesContainer`,
        search: `dtsp-search`,
        showAll: elements.forms.button.alternative,
        title: `${elements.text.size.table} text-primary-500 dark:text-primary-400 font-medium text-start`,
        titleRow:
            `flex flex-col sm:flex-row sm:items-center justify-between ${elements.spacing.gap} mb-4 border ${elements.border.color} p-4 ${elements.border.radius}`,
    };
}
