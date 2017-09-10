import React from 'react'
import PropTypes from 'prop-types'
import EventListItem from './EventListItem'
import Masonry from 'react-masonry-component'

function EventList ({events}) {
  const eventItems = events.map(
    event => <EventListItem event={event} key={event.id}/>)
  return <Masonry>{eventItems}</Masonry>
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover: PropTypes.object,
      description: PropTypes.string,
      attending_count: PropTypes.number.isRequired,
      interested_count: PropTypes.number.isRequired,
      maybe_count: PropTypes.number.isRequired,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
    }),
  ).isRequired,
}

export default EventList
