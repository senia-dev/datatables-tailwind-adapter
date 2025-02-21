export default function () {
    let elements = {
        bg: null,
        text: null,
        spacing: null,
        border: null,
        forms: null,
    }

    elements.bg = `bg-light-50 dark:bg-dark-700`;
    elements.border = {
        radius: `rounded-lg`,
        color: `border-light-200 dark:border-dark-600`,
        focus: `focus:ring-1 focus:ring-primary-500 focus:border-primary-500`
    };

    elements.spacing = {
        rows: 'space-y-4',
        vertical: 'gap-x-2',
        horizontal: 'gap-y-2',
        gap: null,
    };
    elements.spacing.gap = `${elements.spacing.vertical} ${elements.spacing.horizontal}`;

    elements.text = {
        size: {
            table: 'text-sm',
            forms: 'text-sm'
        },
        emphasis: `text-gray-900 dark:text-white`,
        muted: `text-gray-500 dark:text-gray-400`,
    };

    elements.forms = {
        input: `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size.forms} ${elements.text.emphasis} block w-full p-2.5 dark:placeholder-gray-400 outline-none`,
        search: `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size.forms} ${elements.text.emphasis} block w-full p-2.5 dark:placeholder-gray-400 outline-none`,
        select: `${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.border.focus} ${elements.text.size.forms} ${elements.text.emphasis} block w-full p-2.5 outline-none`,
        button: {
            link: `hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-75 ${elements.text.emphasis}`,
            alternative: `${elements.text.size.forms} ${elements.bg} border ${elements.border.radius} ${elements.border.color} ${elements.text.emphasis} py-2.5 px-5 font-medium focus:outline-none hover:bg-light-100 hover:text-dark-700 focus:z-10 focus:ring-4 focus:ring-light-100 dark:focus:ring-dark-700 dark:hover:bg-dark-600 dark:hover:text-light-300`
        }
    };


    return elements;
}