import React from 'react'

function EventListItem ({event}) {
  return (
    <div className="card" style={{width: '30rem'}}>
      <img src={event.cover.source} alt="Cover Img" className="card-img-top"/>
      <div className="card-body">
        <h4 className="card-title">{event.name}</h4>
        <p className="card-text">
          {event.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{event.attending_count}</li>
        <li className="list-group-item">{event.interested_count}</li>
        <li className="list-group-item">{event.maybe_count}</li>
      </ul>
      <div className="card-body">
        <p className="card-text">Starts at: {event.start_time}</p>
        <p className="card-text">Ends at: {event.end_time}</p>
      </div>
    </div>
  )
}

export default EventListItem