import sanatizeFilterObject from '../helpers/filters.helper'
import { getQueryString, getUrlString } from '../helpers/query.helper'
import { fetchLaunchData } from '../api/spacex'

export const REQUEST_LAUNCHES = 'REQUEST_LAUNCHES'
export const RECEIVE_LAUNCHES = 'RECEIVE_LAUNCHES'

export const fetchLaunchesAction = (filters) => async (dispatch) => {
  dispatch({ type: REQUEST_LAUNCHES, filters: sanatizeFilterObject(filters) })
  if (typeof window !== 'undefined') window.history.pushState(null, null, getUrlString(filters))
  const data = await fetchLaunchData(getQueryString(filters))
  dispatch({ type: RECEIVE_LAUNCHES, payload: data, filters: sanatizeFilterObject(filters) })
}
