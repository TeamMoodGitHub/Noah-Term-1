import { types } from './actions'

const initialState = {
  events: [],
  pages: [],
}

export default function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case types.PAGES.SYNC:
      return {
        ...state,
        pages: action.pages,
      }
    default:
      return state
  }
}