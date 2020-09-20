import { REQUEST_LAUNCHES, RECEIVE_LAUNCHES } from './actions'

const initialState = { isFetching: false, payload: [], filters: {} }

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LAUNCHES:
      return { ...state, isFetching: true, filters: action.filters }

    case RECEIVE_LAUNCHES:
      return { ...state, isFetching: false, launches: action.payload, filters: action.filters }

    default:
      return state
  }
}

export default reducer
