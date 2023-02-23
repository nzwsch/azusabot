"use strict";
exports.__esModule = true;
exports.HOLIDAYS_COMMAND = exports.UMA_COMMAND = void 0;
exports.UMA_COMMAND = {
    name: 'uma',
    description: 'Randomly displays character\'s name.',
    type: 1
};
exports.HOLIDAYS_COMMAND = {
    name: 'holidays',
    description: 'Search for the most recent holidays.',
    options: [
        {
            type: 4,
            name: "month",
            description: "Month to be searched. Default is this month.",
            required: false,
            min_value: 1,
            max_value: 12
        },
        {
            type: 4,
            name: "year",
            description: "Year to search for. Default is this year.",
            required: false,
            min_value: 1970,
            max_value: 2050
        }
    ],
    type: 1
};
