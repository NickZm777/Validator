/* eslint-disable valid-typeof */
/* eslint-disable no-console */

function validateFiled(object, key, keyDescription) {
  const errorList = [];

  const objectKeyValue = object[key];

  keyDescription.forEach((descr) => {
    const argsArray = [objectKeyValue, ...descr.validator.params];
    if (!descr.validator.rule.apply(null, argsArray)) {
      errorList.push({
        key,
        message: descr.validator.message,
      });
    }
  });
  return errorList;
}
  
export function validateObject(object, objectScheme) {
    const errorList = [];
  
    Object.keys(objectScheme).forEach((key) => {
      errorList.push(...validateFiled(object, key, objectScheme[key]));
    });
  
    return errorList;
  }

export function dumpErrors(errorList, validatedObject) {
    errorList.forEach((error) => {
      console.log(`Field: ${error.key}`);
      console.log(`Provided value: ${validatedObject[error.key]}`);
      console.log(`Message: ${error.message}`);
    });
  }