import React from 'react'
import EventListItem from './EventListItem'
import Masonry from 'react-masonry-component'

function EventList ({events}) {
  const eventItems = events.map(event => (
    <EventListItem event={event} key={event.id}/>
  ))
  return (
    <Masonry>
      {eventItems}
    </Masonry>
  )
}

export default EventList