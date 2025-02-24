
import * as options from '../structure/options.json';
import * as config from '../structure/config.json';

import * as ext from '../structure/default.json';
import * as buttons from '../structure/buttons.json';
import * as criteria from '../structure/criteria.json';
import * as group from '../structure/group.json';
import * as search_builder from '../structure/searchBuilder.json';
import * as search_pane from '../structure/searchPane.json';
import * as search_panes from '../structure/searchPanes.json';

function getObject(module) {
    // Encode and decode module to make object
    module = JSON.parse(
        JSON.stringify(module)
    );

    // Delete `default` key
    delete module.default;

    return module;
}

export const Structure = {
    'options': getObject(options),
    'config': getObject(config),

    'ext': getObject(ext),
    'buttons': getObject(buttons),
    'criteria': getObject(criteria),
    'group': getObject(group),
    'search_builder': getObject(search_builder),
    'search_pane': getObject(search_pane),
    'search_panes': getObject(search_panes)
}


