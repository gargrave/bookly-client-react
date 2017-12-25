// @flow
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

import type { User } from '../../constants/flowtypes';
import { validationErrors } from '../errors';

function validateLogin(data: User): Object {
  const errors = {
    found: false,
    email: '',
    password: '',
  };
  const email = data.email;
  const password = data.password;

  if (!email) {
    errors.found = true;
    errors.email = validationErrors.required;
  } else if (!isEmail(email)) {
    errors.found = true;
    errors.email = validationErrors.email;
  }

  if (!password) {
    errors.found = true;
    errors.password = validationErrors.required;
  } else if (!isLength(password, { min: 8 })) {
    errors.found = true;
    errors.password = validationErrors.length(8);
  }

  return errors;
}

export {
  validateLogin,
};
