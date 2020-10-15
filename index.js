/* eslint-disable import/extensions */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import { validateObject, dumpErrors} from './modules/validate.js'
import { user, userScheme } from './modules/user.js'


user.firstName = "Mickael";
user.lastName = "Meyers";
user.age = 40;
user.phone = "54226651";
  

  
  const result = validateObject(user, userScheme);
  
  if (result.length !== 0) {
    dumpErrors(result, user);
  } else {
    console.log(`All is ok`);
  }