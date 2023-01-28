export const AWW_COMMAND = {
  name: 'awwww',
  description: 'Drop some cuteness on this channel.',
};

export const BLEP_COMMAND = {
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
          value: 'animal_dog',
        },
        {
          name: 'Cat',
          value: 'animal_cat',
        },
        {
          name: 'Penguin',
          value: 'animal_penguin',
        },
      ],
    },
    {
      name: 'only_smol',
      description: 'Whether to show only baby animals',
      type: 5,
      required: false,
    },
  ],
};

export const CHOO_COMMAND = {
  name: 'choo',
  type: 1,
  description: 'Send a random adorable animal photo',
  options: [
    {
      name: 'animal',
      description: 'The type of animal',
      type: 3,
      required: true,
    },
  ],
};
