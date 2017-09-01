import events from './events/sagas'
import login from './auth/sagas'
// import subscribe from './subscribe/sagas'
import { all } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([
    login(),
    events(),
  ])
}
