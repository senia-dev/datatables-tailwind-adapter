import { default as elements } from "./extensions/elements";
import { default as insertDefault } from "./extensions/default";
import { default as insertButtons } from "./extensions/buttons";
import { default as insertCriteria } from "./extensions/criteria";
import { default as insertGroup } from "./extensions/group";
import { default as insertSearchBuilder } from "./extensions/searchBuilder";
import { default as insertSearchPane } from "./extensions/searchPane";
import { default as insertSearchPanes } from "./extensions/searchPanes";

export class TailwindAdapter {
    // Public prebuilt object
    DataTableT;
    // Required colors
    #stack = ['light', 'dark', 'primary'];
    // Palette range
    #palette = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    // Basic elements
    #elements;

    constructor() {
        // Validation CSS variables
        this.#validateColors();
        // Building basic elements
        this.#elements = elements(...this.#stack);
        // Preparing public `DataTableT`
        this.#prepareObject();
    }

    build() {
        // Basic styles
        $.extend(
            DataTable.ext.classes,
            this.DataTableT.ext.classes
        );
        // Buttons
        $.extend(
            true,
            DataTable.Buttons.defaults,
            this.DataTableT.Buttons.defaults
        );
        // Criteria - SearchBuilder
        $.extend(
            true,
            DataTable.Criteria.classes,
            this.DataTableT.Criteria.classes
        );
        // Group - SearchBuilder
        $.extend(
            true,
            DataTable.Group.classes,
            this.DataTableT.Group.classes
        );
        // SearchBuilder
        $.extend(
            true,
            DataTable.SearchBuilder.classes,
            this.DataTableT.SearchBuilder.classes
        );
        // SearchPane
        $.extend(
            true,
            DataTable.SearchPane.classes,
            this.DataTableT.SearchPane.classes
        );
        // SearchPanes
        $.extend(
            true,
            DataTable.SearchPanes.classes,
            this.DataTableT.SearchPanes.classes
        );
    }

    #validateColors() {
        // For each palette range
        this.#palette.forEach((value) => {
            // And each color
            this.#stack.forEach((color) => {
                // Check if variable `--color-${color}-${value}` exists in CSS
                if (window.getComputedStyle(document.body).getPropertyValue(`--color-${color}-${value}`) === "") {
                    throw new Error(`Missing --color-${color}-${value} CSS variable`);
                }
            });
        });
    }

    #prepareObject() {
        // Prebuilt object generation
        this.DataTableT = {
            ext: {
                classes: insertDefault(this.#elements)
            },
            Buttons: {
                defaults: insertButtons(this.#elements)
            },
            Criteria: {
                classes: insertCriteria(this.#elements)
            },
            Group: {
                classes: insertGroup(this.#elements)
            },
            SearchBuilder: {
                classes: insertSearchBuilder(this.#elements)
            },
            SearchPane: {
                classes: insertSearchPane(this.#elements)
            },
            SearchPanes: {
                classes: insertSearchPanes(this.#elements)
            },
        }
    }
}
