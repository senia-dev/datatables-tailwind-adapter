import { AdapterConfig } from "./extensions/config";

import { Adapter } from "./src/datatables";
import { Structure } from "./src/structure";

export class TailwindAdapter {
    // Public prebuilt object
    DataTableT;
    // Config
    Options;
    // Private prebuilt object
    #DataTableR;
    // CSS vars, used in adapter
    #variables = [
        '--color-primary-100',
        '--color-primary-200',
        '--color-primary-300',
        '--color-primary-400',
        '--color-primary-500',
        '--color-primary-600',
        '--color-primary-700',
        '--color-primary-800',
        '--color-primary-900',

        '--color-light-50',
        '--color-light-100',
        '--color-light-200',
        '--color-light-300',

        '--color-dark-600',
        '--color-dark-700',
        '--color-dark-800',
    ];

    constructor(
        CustomOptions = {}
    ) {
        // Validation CSS variables
        this.#validateColors();
        // Building basic config
        CustomOptions = this.#validateStructure(CustomOptions, 'options', AdapterConfig());

        this.Options = AdapterConfig(CustomOptions);

        // Preparing public `DataTableT`
        this.DataTableT = this.#DataTableR = Adapter(this.Options);
    }

    build() {
        // Basic styles
        $.extend(
            DataTable.ext.classes,
            this.#validateStructure(this.DataTableT.ext, 'ext', this.#DataTableR.ext).classes
        );
        // Buttons
        $.extend(
            true,
            DataTable.Buttons.defaults,
            this.#validateStructure(this.DataTableT.Buttons, 'buttons', this.#DataTableR.Buttons).defaults
        );
        // Criteria - SearchBuilder
        $.extend(
            true,
            DataTable.Criteria.classes,
            this.#validateStructure(this.DataTableT.Criteria, 'criteria', this.#DataTableR.Criteria).classes
        );
        // Group - SearchBuilder
        $.extend(
            true,
            DataTable.Group.classes,
            this.#validateStructure(this.DataTableT.Group, 'group', this.#DataTableR.Group).classes
        );
        // SearchBuilder
        $.extend(
            true,
            DataTable.SearchBuilder.classes,
            this.#validateStructure(this.DataTableT.SearchBuilder, 'search_builder', this.#DataTableR.SearchBuilder).classes
        );
        // SearchPane
        $.extend(
            true,
            DataTable.SearchPane.classes,
            this.#validateStructure(this.DataTableT.SearchPane, 'search_pane', this.#DataTableR.SearchPane).classes
        );
        // SearchPanes
        $.extend(
            true,
            DataTable.SearchPanes.classes,
            this.#validateStructure(this.DataTableT.SearchPanes, 'search_panes', this.#DataTableR.SearchPanes).classes
        );

        return this;
    }

    #validateColors() {
        // And each color
        this.#variables.forEach((color) => {
            // Check if variable `${color}` exists in CSS
            if (window.getComputedStyle(document.body).getPropertyValue(`${color}`) === "") {
                throw new Error(`Missing ${color} CSS variable`);
            }
        });
    }

    #validateStructure(target, name, replacement) {
        let $valid = Structure[name];

        if (typeof target !== 'object') {
            throw new Error(`${name} preset is not an object`);
        }

        return this.#iterateThroughObject($valid, target, replacement);
    }

    #iterateThroughObject(valid, target, replacement) {
        Object.keys(valid).forEach(key => {
            if (target[key] == undefined) {
                target[key] = replacement[key];
            }

            if (typeof valid[key] === 'object' && valid[key] !== null) {
                target[key] = this.#iterateThroughObject(valid[key], target[key], replacement[key])
            }
        })

        return target;
    }
}
