import { REQUEST_LAUNCHES, RECEIVE_LAUNCHES } from './actions'

function reducer(state = { isFetching: false, payload: [] }, action) {
  switch (action.type) {
    case REQUEST_LAUNCHES:
      return { ...state, isFetching: true }

    case RECEIVE_LAUNCHES:
      return { ...state, isFetching: false, launches: action.payload }

    default:
      return state
  }
}

export default reducer
