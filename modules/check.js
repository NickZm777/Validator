/* eslint-disable valid-typeof */
/* eslint-disable no-console */

export function checkType(value, requiredType) {
    return typeof value === requiredType;
  }
  
export function nonEmptyString(value) {
    return value.length > 0;
  }
  
export function numberInRange(value, min, max) {
    return min <= value && value <= max;
  }