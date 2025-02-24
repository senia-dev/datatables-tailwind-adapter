export function insertButtons(elements) {
    return {
        dom: {
            container: {
                tag: `div`,
                className: `flex flex-row flex-wrap ${elements.spacing.gap}`
            },
            collection: {
                container: {
                    // The element used for the dropdown
                    className: `dt-button-collection`,
                    content: {
                        className: ``,
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
                className: elements.forms.button.alternative,
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
                dropHtml: `<span class="dt-button-down-arrow">&#x25BC;</span>`
            },
            split: {
                action: {
                    // action button
                    className: `dt-button-split-drop-button dt-button`,
                    tag: `button`
                },
                dropdown: {
                    // button to trigger the dropdown
                    align: `split-right`,
                    className: `dt-button-split-drop`,
                    splitAlignClass: `dt-button-split-left`,
                    tag: `button`
                },
                wrapper: {
                    // wrap around both
                    className: `dt-button-split`,
                    tag: `div`
                }
            }
        }
    }
}