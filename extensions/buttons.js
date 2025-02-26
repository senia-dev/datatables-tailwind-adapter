export function insertButtons(elements) {
    return {
        dom: {
            container: {
                tag: `div`,
                className: `flex flex-row flex-wrap ${elements.spacing.gap}`
            },
            collection: {
                container: {
                    // The element used for the dropdown `dt-button-collection`
                    className: `dt-button-collection`,
                    content: {
                        className: `${elements.bg} flex flex-row flex-wrap ${elements.spacing.gap} p-2 border ${elements.border.color} ${elements.border.radius}`,
                        tag: `div`
                    },
                    tag: `div`
                }
                // optionally
                // , button: IButton - buttons inside the collection container
                // , split: ISplit - splits inside the collection container
            },
            button: {
                tag: `button`,
                className: `${elements.forms.button.default}`,
                active: `dt-button-active`, // class name
                disabled: `disabled`, // class name
                spacer: {
                    className: `dt-button-spacer`,
                    tag: `span`
                },
                liner: {
                    tag: `span`,
                    className: ``
                },
                dropClass: ``,
                dropHtml: `<span class="text-xs">&#x25BC;</span>`
            },
            split: {
                action: {
                    // action button
                    className: `${elements.forms.button.default}`,
                    tag: `button`
                },
                dropdown: {
                    // button to trigger the dropdown
                    align: `split-right`,
                    className: `${elements.forms.button.default} !border-l-0 !rounded-l-none !px-1.5`,
                    splitAlignClass: `dt-button-split-left`,
                    tag: `button`
                },
                wrapper: {
                    // wrap around both
                    className: `flex flex-row *:first:!border-r-0 *:first:!rounded-r-none`,
                    tag: `div`
                }
            }
        }
    }
}