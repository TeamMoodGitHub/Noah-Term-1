import {
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
  all,
} from 'redux-saga/effects'
import rsf from '../firebase'
import { types, syncPages } from './actions'

export default function * rootSaga () {
  yield all([
    rsf.database.sync('pages', syncPages),
  ])
}