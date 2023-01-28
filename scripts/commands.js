"use strict";
exports.__esModule = true;
exports.DRAGON_COMMAND = exports.CLOO_COMMAND = exports.BLEP_COMMAND = exports.AWW_COMMAND = void 0;
exports.AWW_COMMAND = {
    name: 'awwww',
    description: 'Drop some cuteness on this channel.'
};
exports.BLEP_COMMAND = {
    name: 'blep',
    type: 1,
    description: 'Send a random adorable animal photo',
    options: [
        {
            name: 'animal',
            description: 'The type of animal',
            type: 3,
            required: true,
            choices: [
                {
                    name: 'Dog',
                    value: 'animal_dog'
                },
                {
                    name: 'Cat',
                    value: 'animal_cat'
                },
                {
                    name: 'Penguin',
                    value: 'animal_penguin'
                },
            ]
        },
        {
            name: 'only_smol',
            description: 'Whether to show only baby animals',
            type: 5,
            required: false
        },
    ]
};
exports.CLOO_COMMAND = {
    name: 'cloo',
    description: 'Drop some cuteness on this channel.',
    type: 3,
    required: true
};
exports.DRAGON_COMMAND = {
    name: 'dragon',
    description: 'Drop some cuteness on this channel.',
    type: 3
};
