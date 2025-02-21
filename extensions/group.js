export default function (elements) {
    return {
        add: `sm:max-w-48`,
        button: `${elements.forms.button.link} border ${elements.border.radius} ${elements.border.color} p-3`,
        clearGroup: `max-w-12 -ml-px rounded-l-none`,
        greyscale: `dtsb-greyscale`,
        group: `relative flex flex-col sm:justify-start mb-3`,
        inputButton: `dtsb-iptbtn`,
        logic: `max-w-24 rounded-r-none`,
        logicContainer: `flex flex-row rotate-90 mt-3 absolute`,
        search: `dtsb-search`
    };
}
