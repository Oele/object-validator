export default function(schema, data, allowExtraValues, debug) {
  let foundError = false;

  Object.keys(schema).forEach(schemaKey => {
    // loop over all schema keys and compare "desired" type with actual type

    const desiredType = schema[schemaKey];
    const valueToTest = data[schemaKey];
    let actualType = typeof valueToTest;

    if (actualType === "object") {
      // javascript returns "object" for arrays, so test explicitly for arrays
      if (Array.isArray(valueToTest)) {
        actualType = "array";
      }
    }

    if (desiredType !== actualType) {
      foundError = true;
    }

    // keys that are in schema but not in object have actualType 'undefined', so no extra code needed for this case

    if (debug) {
      console.log(
        schemaKey,

        "is of type",
        actualType,
        ", should be type",
        desiredType,
        "->",
        foundError ? "FAIL" : "PASS"
      );
    }
  });

  // unclear from description if extra keys in object are allowed, so added this validation as an option
  if (!allowExtraValues) {
    Object.keys(data).forEach(dataKey => {
      if (!Object.keys(schema).includes(dataKey)) {
        if (debug) {
          console.log("object contains extra key", dataKey, " => FAIL");
        }
        foundError = true;
      }
    });
  }

  return !foundError;
}
