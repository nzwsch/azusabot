export const UMA_COMMAND = {
  name: 'uma',
  description: 'Randomly displays character\'s name.',
  type: 1,
};

export const HOLIDAYS_COMMAND = {
  name: 'holidays',
  description: 'Search for the most recent holidays.',
  options: [
    {
      type: 4,
      name:  "month",
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
      max_value: 2050, // TODO: automate?
    }
  ],
  type: 1
};

// export const POMODO
