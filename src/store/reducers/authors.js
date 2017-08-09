import { AUTH, AUTHORS } from '../action-types'

import authorModel from '../../models/Author.model'

const defaultState = {
  authorRequestPending: false,
  data: []
}

export default function orders (state = defaultState, action) {
  switch (action.type) {
    case AUTHORS.REQUEST_START:
      return Object.assign({}, state, {
        authorRequestPending: true
      })

    case AUTHORS.REQUEST_END:
      return Object.assign({}, state, {
        authorRequestPending: false
      })

    case AUTHORS.FETCH_SUCCESS:
      const data = action.payload.authors.map(author => authorModel.fromAPI(author))
      return Object.assign({}, state, { data })

    case AUTH.LOGOUT:
      return Object.assign({}, defaultState)

    default:
      return state
  }
}