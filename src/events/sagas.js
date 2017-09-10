import { call, select, takeEvery, all } from 'redux-saga/effects'
import rsf from '../firebase'
import { types, syncPages, syncEvents } from './actions'

function * addPage () {
  const newPage = yield select(state => state.form.addPage.values.newPage)
  const uid = yield select(state => state.auth.user.uid)

  yield call(rsf.database.create, `pages/${uid}`, {
    user: uid,
    pageName: newPage,
  });
}

function * removePage (action) {
  const {pageId} = action
  const uid = yield select(state => state.auth.user.uid)
  yield call(rsf.database.delete, `pages/${uid}/${pageId}`)
}

export default function * rootSaga () {
  const pagesTransformer = pages =>
    pages
      ? Object.keys(pages).map(key => ({
        ...pages[key],
        id: key,
      }))
      : []
  const eventsTransformer = events => {
    if (events) {
      return events.sort((a, b) => {
        const dateA = new Date(a.start_time)
        const dateB = new Date(b.start_time)
        return dateA - dateB
      })
    } else {
      return []
    }
  };

  yield all([
    rsf.database.sync(`pages/${localStorage.getItem('uid')}`, syncPages,
      pagesTransformer),
    rsf.database.sync(`events/${localStorage.getItem('uid')}`, syncEvents,
      eventsTransformer),
    takeEvery(types.PAGES.ADD, addPage),
    takeEvery(types.PAGES.REMOVE, removePage),
  ]);
}
