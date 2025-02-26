export function insertSearchBuilder(elements) {
    return {
        button: elements.forms.button.default,
        clearAll: `sm:ms-auto`,
        container: ``,
        inputButton: `dtsb-iptbtn`,
        title: `${elements.text.size.table} text-primary-500 dark:text-primary-400 font-medium text-start`,
        titleRow:
            `flex flex-col sm:flex-row sm:items-center justify-between ${elements.spacing.gap} mb-4 border ${elements.border.color} p-4 ${elements.border.radius}`,
    };
}
