const validationErrors = {
  required: 'This field is required.',
  email: 'Must be a valid email address.',
  passwords: 'Passwords do not match',
  length: (min) => `Must be at least ${min} characters long.`,
};

const cleanMessages = {
  EXPIRED_TOKEN: 'Auth token has expired. Please login again.',
  INVALID_TOKEN: 'Invalid token. Please login again.',
  INVALID_LOGIN: 'Incorrect username/password combination. Please try again.',
  UNKNOWN: 'An uknown error occurred.',
};

const cleanErrors = {
  EMPTY: { name: '', message: '' },
  EXPIRED_TOKEN: { message: cleanMessages.EXPIRED_TOKEN },
  INVALID_TOKEN: { message: cleanMessages.INVALID_TOKEN },
  INVALID_LOGIN: { message: cleanMessages.INVALID_LOGIN },
};

function parseError(err) {
  if (err.response && err.response.data) {
    return err.response.data;
  } else if (err.message) {
    return err;
  }
  return { message: cleanMessages.UNKNOWN };
}

export {
  cleanErrors,
  parseError,
  validationErrors,
};
