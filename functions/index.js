const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const axios = require('axios')
firebase.initializeApp(functions.config().firebase)

exports.getFacebookPageEvents = functions.https.onRequest((req, res) => {
  let accessToken = '1902171126772893|Uro9wCu-luLA5aRJAlkjL3mMfjY'
  const {pages, uid} = req.body
  const requests = pages.map(pageId => {
    return axios.get(
      `https://graph.facebook.com/v2.10/${pageId}/events?time_filter=upcoming`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })

    // .catch(err => console.log(err))
  })
  Promise.all(requests)
    .then(responses => {
      const events = []
      responses.forEach(response => {
        response.data.data.forEach(event => events.push(event))
      })
      firebase.database().ref(`/events/${uid}`).push(events)
        .then(f => {
          console.log('Pushed events to firebase database')
          res.status(200).send()
        })
    })

})

