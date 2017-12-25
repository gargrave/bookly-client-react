// @flow
const validationErrors = {
  required: 'This field is required.',
  requiredWithName: (field: string) => `"${field}" is a required field.`,
  email: 'Must be a valid email address.',
  emailWithName: (field: string) => `"${field}" must be a valid email address.`,
  passwords: 'Passwords do not match',
  length: (min: number | string) => `Must be at least ${min} characters long.`,
  lengthWithName: (field: string, min: number | string) => `"${field}" be at least ${min} characters long.`,
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

function simplifyApiError(msg: string): string {
  // 'required field' API errors
  let m = msg.match(/\["(\w+)" is not allowed to be empty\]/);
  if (m && m.length && m.length > 1) {
    return validationErrors.requiredWithName(m[1]);
  }

  // 'must be email' API errors
  m = msg.match(/\["(\w+)" must be a valid email\]/);
  if (m && m.length && m.length > 1) {
    return validationErrors.emailWithName(m[1]);
  }

  // 'required length' API errors
  m = msg.match(/\["(\w+)" length must be at least (\d) characters long\]/);
  if (m && m.length && m.length > 2) {
    return validationErrors.lengthWithName(m[1], m[2]);
  }

  return `Unknown API error: ${msg}`;
}

function parseError(err: Object): string {
  if (err.response && err.response.data) {
    return err.response.data;
  } else if (err.message) {
    return simplifyApiError(err.message);
  }
  return cleanMessages.UNKNOWN;
}

export {
  cleanErrors,
  parseError,
  validationErrors,
};
