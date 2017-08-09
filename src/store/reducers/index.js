import { combineReducers } from 'redux'

import app from './app'
import auth from './auth'
import authors from './authors'

export default combineReducers({
  app,
  auth,
  authors
})
