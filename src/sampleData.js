export default [
  {
    name: "bars",
    schema: {
      name: "string",
      address: "string",
      drinks: "object"
    },
    examples: [
      {
        name: "Jimmys drinks",
        address: "Somewhere over the rainbow",
        drinks: {
          beer: ["Straffe Hendrik", "Rochefort", "St Bernard"]
        }
      },
      {
        name: "Sjonnies",
        address: "Centrum 001",
        drinks: [
          // < No object
          "Heineken"
        ]
      }
    ]
  },
  {
    name: "cars",
    schema: {
      brand: "string",
      type: "string",
      milage: "number",
      extras: "array"
    },
    examples: [
      {
        brand: "Mazda",
        type: "MX5 NB 1.8",
        milage: 199999.99,
        extras: ["2001 Special Edition"]
      },
      {
        brand: "BMW",
        type: "335",
        milage: "100000", // < No number
        extras: ["LCI", "KW Coilovers"]
      }
    ]
  },
  {
    name: "persons",
    schema: {
      name: "string",
      age: "number",
      siblings: "array",
      metaData: "object",
      active: "boolean"
    },
    examples: [
      {
        name: "James",
        age: 25,
        siblings: ["Johnnathan"],
        metaData: {},
        active: true
      },
      {
        name: "James",
        age: 25,
        active: true
      }
    ]
  },
  {
    name: "extraKeyTest",
    schema: {
      name: "string",
      age: "number",
      siblings: "array",
      metaData: "object",
      active: "boolean"
    },
    examples: [
      {
        name: "James",
        age: 25,
        siblings: ["Johnnathan"],
        metaData: {},
        active: true,
        extraUnknownKey: 5
      }
    ]
  }
];
