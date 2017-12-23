import { AUTH, AUTHORS } from '../action-types';

import authorModel from '../../models/Author.model';

const defaultState = {
  authorRequestPending: false,
  data: [],
};

export default function authors(state = defaultState, action) {
  switch (action.type) {
    case AUTHORS.REQUEST_START:
      return Object.assign({}, state, {
        authorRequestPending: true,
      });

    case AUTHORS.REQUEST_END:
      return Object.assign({}, state, {
        authorRequestPending: false,
      });

    case AUTHORS.FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.authors.map((author) => authorModel.fromAPI(author)),
      });

    case AUTHORS.CREATE_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, authorModel.fromAPI(action.payload.author)],
      });

    case AUTHORS.UPDATE_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data.filter((a) => a.id !== action.payload.author.id), authorModel.fromAPI(action.payload.author)],
      });

    case AUTH.LOGOUT:
      return Object.assign({}, defaultState);

    default:
      return state;
  }
}
