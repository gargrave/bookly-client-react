import { AUTH } from '../action-types'
import axios from 'axios'

import { apiUrls } from '../../constants/urls'
import { parseError } from '../../globals/errors'
import apiHelper from '../../utils/api-helper'

function _requestStart () {
  return { type: AUTH.REQUEST_START }
}

function _requestEnd () {
  return { type: AUTH.REQUEST_END }
}

function _login (user) {
  return { type: AUTH.LOGIN, payload: { user } }
}

function _logout () {
  return { type: AUTH.LOGOUT }
}

export function login (user) {
  return async dispatch => {
    dispatch(_requestStart())
    try {
      const request = apiHelper.axPost(apiUrls.login, user)
      const result = await axios(request)
      const userData = result.data

      dispatch(_login(result.data))
      return userData
    } catch (err) {
      throw parseError(err)
    } finally {
      dispatch(_requestEnd())
    }
  }
}

export function logout () {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_logout())
      resolve()
    })
  }
}
