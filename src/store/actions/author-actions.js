import { AUTHORS } from '../action-types'
import axios from 'axios'

import { apiUrls } from '../../constants/urls'
import { parseError } from '../../globals/errors'
import apiHelper from '../../utils/api-helper'
import { getTokenOrDie } from '../store-helpers'

function _requestStart () {
  return { type: AUTHORS.REQUEST_START }
}

function _requestEnd () {
  return { type: AUTHORS.REQUEST_END }
}

function _fetchAuthors (authors) {
  return {
    type: AUTHORS.FETCH_SUCCESS,
    payload: { authors }
  }
}

function _createAuthor (author) {
  return {
    type: AUTHORS.CREATE_SUCCESS,
    payload: { author }
  }
}

export function fetchAuthors () {
  return async (dispatch, getState) => {
    const authors = getState().authors.data
    if (authors.length) {
      dispatch(authors)
      return authors
    } else {
      dispatch(_requestStart())
      try {
        const authToken = getTokenOrDie(getState)
        const request = apiHelper.axGet(apiUrls.authors, authToken)
        const result = await axios(request)
        // const pagination = result.data.meta
        const authorData = result.data.results

        dispatch(_fetchAuthors(authorData))
        return authorData
      } catch (err) {
        throw parseError(err)
      } finally {
        dispatch(_requestEnd())
      }
    }
  }
}

export function createAuthor (author) {
  return async (dispatch, getState) => {
    dispatch(_requestStart())
    try {
      const authToken = getTokenOrDie(getState)
      const request = apiHelper.axPost(apiUrls.authors, author, authToken)
      const result = await axios(request)
      const authorData = result.data

      dispatch(_createAuthor(authorData))
      return authorData
    } catch (err) {
      throw parseError(err)
    } finally {
      dispatch(_requestEnd())
    }
  }
}
