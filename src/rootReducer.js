import auth from './auth/reducer'
import events from './events/reducer'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  events,
  form: formReducer,
})