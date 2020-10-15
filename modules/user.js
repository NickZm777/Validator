/* eslint-disable import/extensions */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import { checkType, nonEmptyString, numberInRange } from '../modules/check.js'

export const user = {
    firstName: "Default User first name",
    lastName: "Default User last name",
    age: 78,
    phone: "212412342134",
  };
  
  export const userScheme = {
    firstName: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "First Name not string",          
        } 
      },
      {
        validator: {
          rule: nonEmptyString,
          params: [],
          message: "First Name is empty",          
        } 
      },
    ],
    lastName: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "Last Name not string",          
        }
      },
      {
        validator: {
          rule: nonEmptyString,
          params: [],
          message: "Last Name is emtpy",          
        }
      },
    ],
    age: [
      {
        validator: {
          rule: checkType,
          params: ["number"],
          message: "Age is not a number",          
        }
      },
      {
        validator: {
          rule: numberInRange,
          params: [10, 56],
          message: "Age is not in range between 10 and 56",          
        }
      },
    ],
    phone: [
      {
        validator: {
          rule: checkType,
          params: ["string"],
          message: "Phone not string",          
        }
      },
    ],
  }
  
  