import { AUTH } from '../action-types'

const defaultState = {}

export default function orders (state = defaultState, action) {
  switch (action.type) {
    case AUTH.LOGIN:
      return state

    case AUTH.LOGOUT:
      return state

    default:
      return state
  }
}
