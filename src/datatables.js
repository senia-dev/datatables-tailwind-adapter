import { insertDefault } from "../extensions/default";
import { insertButtons } from "../extensions/buttons";
import { insertCriteria } from "../extensions/criteria";
import { insertGroup } from "../extensions/group";
import { insertSearchBuilder } from "../extensions/searchBuilder";
import { insertSearchPane } from "../extensions/searchPane";
import { insertSearchPanes } from "../extensions/searchPanes";

export function Adapter(config) {
    return {
        ext: {
            classes: insertDefault(config)
        },
        Buttons: {
            defaults: insertButtons(config)
        },
        Criteria: {
            classes: insertCriteria(config)
        },
        Group: {
            classes: insertGroup(config)
        },
        SearchBuilder: {
            classes: insertSearchBuilder(config)
        },
        SearchPane: {
            classes: insertSearchPane(config)
        },
        SearchPanes: {
            classes: insertSearchPanes(config)
        },
    }
}