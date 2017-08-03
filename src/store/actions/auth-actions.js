import { AUTH } from '../action-types'

function _login () {
  return {
    type: AUTH.LOGIN,
    payload: {}
  }
}

function _logout () {
  return {
    type: AUTH.LOGOUT,
    payload: {}
  }
}

export function login () {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_login())
      resolve()
    })
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
