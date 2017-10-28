import env from './env'

const DEV_API_ROOT_URL = 'http://localhost:3001'
const PROD_API_ROOT_URL = 'https://bookly.gargrave.us'

let apiRoot
let restApiRoot

init()

// URLs for AJAX calls to the API
export let apiUrls = {
  // auth URLS
  register: `${restApiRoot}/auth/register/`,
  login: `${restApiRoot}/auth/login/`,
  logout: `${restApiRoot}/auth/logout/`,
  users: `${restApiRoot}/auth/users/`,
  profiles: `${restApiRoot}/auth/profiles/`,
  verify: `${restApiRoot}/auth/verify/`,
  verifyResend: `${restApiRoot}/auth/verify/resend/`,
  pwResetRequest: `${restApiRoot}/auth/passwordreset`,
  pwResetConfirm: `${restApiRoot}/auth/passwordreset/confirm`,
  // REST resource URLS
  authors: `${restApiRoot}/authors/`,
  books: `${restApiRoot}/books/`,
}

// URLs for local routing (i.e. react-router)
export let localUrls = {
  about: '/about',
  // auth routes
  account: '/account',
  login: '/account/login',
  register: '/account/register',
  verify: '/account/verify',
  pwResetRequest: '/account/passwordreset',
  pwResetConfirm: '/account/passwordreset/confirm',
  // authors routes
  authorsList: '/authors',
  authorCreate: '/authors/new',
  authorDetail: '/authors/:id',
  // books routes
  booksList: '/books',
  bookCreate: '/books/new',
  bookDetail: '/books/:id',
}

function init () {
  if (env.isProd()) {
    apiRoot = PROD_API_ROOT_URL
  } else {
    apiRoot = DEV_API_ROOT_URL
  }
  restApiRoot = `${apiRoot}/api/v1`
}
