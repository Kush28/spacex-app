import { REQUEST_LAUNCHES,  RECEIVE_LAUNCHES } from './actions';

function launches( state = {isFetching: false, launches: []}, action) {
  switch (action.type) {
    case REQUEST_LAUNCHES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_LAUNCHES:
      return Object.assign({}, state, {
        isFetching: false,
        launches: action.launches
      });
    default:
      return state
  }
}

export default launches
