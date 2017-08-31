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
import { types, syncPages, syncEvents } from './actions'

function * addPage () {
  const newPage = yield select(state => state.form.addPage.values.newPage)
  const user = yield select(state => state.auth.user)

  yield call(rsf.database.create, `pages/${user.uid}`, {
    user: user.uid,
    pageName: newPage,
  })
}



export default function * rootSaga () {
  const pagesTransformer = pages => pages ? Object.keys(pages).map(key => ({
      ...pages[key],
      id: key,
    }))
    : []



  yield all([
    rsf.database.sync(`pages/${localStorage.getItem('uid')}`, syncPages,
      pagesTransformer),
    rsf.database.sync(`events/${localStorage.getItem('uid')}`, syncEvents),
    takeEvery(types.PAGES.ADD, addPage),
  ])
}

