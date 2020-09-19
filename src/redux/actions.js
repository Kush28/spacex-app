import { API_ENDPOINT } from "../constants"

export const REQUEST_LAUNCHES = 'REQUEST_LAUNCHES'
export const RECEIVE_LAUNCHES = 'RECEIVE_LAUNCHES'


function requestLaunches() {
  return {
    type: REQUEST_LAUNCHES
  }
}

function receiveLaunches(json) {
  return {
    type: RECEIVE_LAUNCHES,
    launches: json
  }
}

function fetchLaunches() {
  return dispatch => {
    dispatch(requestLaunches())
    return fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => dispatch(receiveLaunches(json)))
  }
}

function shouldFetchLaunches(state) {
  const launches = state.launches
  if (launches.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchLaunchesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchLaunches(getState())) {
      return dispatch(fetchLaunches())
    }
  }
}
