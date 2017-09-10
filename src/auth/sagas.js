import firebase from 'firebase'
import { call, fork, put, take, takeEvery, all } from 'redux-saga/effects'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser,
} from './actions';

import rsf from '../firebase'
import { syncEvents, syncPages } from '../events/actions'

const authProvider = new firebase.auth.FacebookAuthProvider()

function * loginSaga () {
  try {
    const data = yield call(rsf.auth.signInWithPopup, authProvider)
    yield put(loginSuccess(data))
    yield put(syncEvents())
    yield put(syncPages())
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function * logoutSaga () {
  try {
    const data = yield call(rsf.auth.signOut)
    yield put(logoutSuccess(data))
    yield put(syncEvents())
    yield put(syncPages())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function * syncUserSaga () {
  const channel = yield call(rsf.auth.channel)
  while (true) {
    const {user} = yield take(channel)
    if (user) {
      localStorage.setItem('uid', user.uid)
      yield put(syncUser(user))
    } else {
      yield put(syncUser(null))
    }
  }
}

export default function * loginRootSaga () {
  yield fork(syncUserSaga)
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}
