import { types } from './actions'

const initialState = {
  eventsList: [],
  pages: [],
}

export default function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case types.PAGES.SYNC:
      return {
        ...state,
        pages: action.pages,
      }
    case types.EVENTS.SYNC:
      return {
        ...state,
        eventsList: action.events,
      }
    default:
      return state
  }
}