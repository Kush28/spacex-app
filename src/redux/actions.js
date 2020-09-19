import { fetchLaunchData } from '../api/spacex'

export const REQUEST_LAUNCHES = 'REQUEST_LAUNCHES'
export const RECEIVE_LAUNCHES = 'RECEIVE_LAUNCHES'

export const fetchLaunchesAction = () => async (dispatch) => {
  dispatch({ type: REQUEST_LAUNCHES })
  const { data } = await fetchLaunchData()
  dispatch({ type: RECEIVE_LAUNCHES, payload: data })
}
