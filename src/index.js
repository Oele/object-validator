import sampleData from "./sampleData"; // the sample data
import validate from "./validate"; // the actual validator

const debug = false; // set to true to print schemas and each validated value to console
const allowExtraValues = true; // set to false to disallow object keys that are not in schema

// loop over sample data and print validation result to console
sampleData.forEach(item => {
  const { name, schema, examples } = item;

  console.log("\n\nSCHEMA NAME: ", name, "\n");

  if (debug) {
    console.log(schema);
    console.log("\n");
  }

  examples.forEach(example => {
    console.log("object:");
    console.log(example);

    const isValid = validate(schema, example, allowExtraValues, debug);
    console.log("==> valid:", isValid, "\n");
  });
});
