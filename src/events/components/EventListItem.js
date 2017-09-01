import React from 'react'

function EventListItem ({event: {name, cover, description, attending_count, interested_count, maybe_count, start_time, end_time}}) {
  const startDate = new Date(start_time)
  const endDate = new Date(end_time)

  return (
    <div className="card" style={{width: '30rem'}}>
      <img src={cover.source} alt="Cover Img" className="card-img-top"/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">
          {description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{attending_count} Attending</li>
        <li className="list-group-item">{interested_count} Interested</li>
        <li className="list-group-item">{maybe_count} Maybe</li>
      </ul>
      <div className="card-body">
        <p className="card-text">Starts at: {startDate.toLocaleString()}</p>
        <p className="card-text">Ends at: {endDate.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default EventListItem