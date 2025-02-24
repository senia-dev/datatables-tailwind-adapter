export function insertCriteria(elements) {
    return {
        button: ``,
        buttonContainer: `flex flex-row items-center ${elements.spacing.gap}`,
        condition: `dtsb-condition`,
        container: `flex flex-row justify-start ${elements.spacing.gap} mb-3`,
        data: `dtsb-data`,
        "delete": `${elements.forms.button.link} border ${elements.border.radius} ${elements.border.color} p-3 w-10 !text-red-500 h-10 flex items-center justify-center`,
        dropDown: `dtsb-dropDown ${elements.forms.select} disabled:opacity-25 disabled:cursor-not-allowed h-full`,
        greyscale: ``,
        input: `${elements.forms.input} h-full`,
        inputCont: `flex flex-row justify-start items-center ${elements.spacing.gap} w-full h-full`,
        italic: `italic`,
        joiner: `dtsb-joiner`,
        left: `${elements.forms.button.link} border ${elements.border.radius} ${elements.border.color} p-3 w-10 h-10 flex items-center justify-center`,
        notItalic: `dtsb-notItalic`,
        option: `dtsb-option`,
        right: `${elements.forms.button.link} border ${elements.border.radius} ${elements.border.color} p-3 w-10 h-10 flex items-center justify-center`,
        select: `dtsb-select ${elements.forms.select} disabled:opacity-25 disabled:cursor-not-allowed h-full`,
        value: `dtsb-value`,
        vertical: `dtsb-vertical`
    };
}
