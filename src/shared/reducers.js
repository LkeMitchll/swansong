import { combineReducers } from 'redux'
import {
  SELECT_WEEK,
  INVALIDATE_WEEK,
  REQUEST_TOTALS,
  RECEIVE_TOTALS,
} from './actions'

function selectedWeek(state = {}, action) {
  switch (action.type) {
    case SELECT_WEEK:
      return action.from
    default:
      return state
  }
}

function totals(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: {},
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_WEEK:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case REQUEST_TOTALS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_TOTALS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.totals,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

function totalsByWeek(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_WEEK:
    case RECEIVE_TOTALS:
    case REQUEST_TOTALS:
      return Object.assign({}, state, {
        [action.from]: totals(state[action.from], action),
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  totalsByWeek,
  selectedWeek,
})

export default rootReducer
