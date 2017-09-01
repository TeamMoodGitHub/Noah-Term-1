import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCsyTzFHVsVrYypXtdRgJN_DSEiyhR5meY',
  authDomain: 'facebook-event-aggregator.firebaseapp.com',
  databaseURL: 'https://facebook-event-aggregator.firebaseio.com',
  projectId: 'facebook-event-aggregator',
  storageBucket: 'facebook-event-aggregator.appspot.com',
  messagingSenderId: '863570320235',
})
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)
export default reduxSagaFirebase
