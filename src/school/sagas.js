import {
  call,
  select,
  takeEvery,
  all,
  put,
  take,
  fork,
} from 'redux-saga/effects'
import rsf from '../firebase'
import { relateSchoolPages } from '../api'
import {
  addSchoolSuccess,
  fetchSchool,
  retrievedSchool,
  startAddSchool,
  syncSchoolPages,
  types,
} from './actions'

function * addSchool (action) {
  const uid = yield select(state => state.auth.user.uid)
  const {school} = action
  yield put(startAddSchool())
  const schoolId = yield call(relateSchoolPages, school, uid)
  yield put(fetchSchool(schoolId))
  yield put(addSchoolSuccess())
}

function * getSchool ({schoolId}) {
  const schoolPages = yield call(rsf.database.read, `/schools/${schoolId}`)
  yield put(retrievedSchool(schoolPages))
}

function * syncSchoolSaga () {
  // const uid = localStorage.getItem('uid');
  // const userSchool = yield call(rsf.database.read, `/users/${uid}/school`);
  // const channel = yield call(rsf.database.channel, `/schools/${userSchool}/schoolPages`);
  const channel = yield call(rsf.database.channel, 'test')
  while (true) {
    const foo = yield take(channel)
    console.log('channel triggered', foo)
    // yield put(syncSchoolPages(schoolPages));
  }
}

export default function * rootSaga () {
  yield fork(syncSchoolSaga)
  yield all([
    takeEvery(types.SCHOOL.ADD, addSchool),
    takeEvery(types.SCHOOL.FETCH, getSchool)])
}
