import React, { Component } from 'react'
import {
  Grid,
  Row,
  ListGroup,
  ListGroupItem,
  Col,
} from 'react-bootstrap'

import { connect } from 'react-redux'
import AddPageForm from './components/AddPageForm'
import { addPage } from './actions'
import EventList from './components/EventList'

class Events extends Component {

  submit = values => {
    this.props.addPage()
  }

  render () {
    const {handleSubmit, pages, events} = this.props
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <AddPageForm onSubmit={this.submit}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Subscribed Pages</h5>
            <ListGroup>
              {pages && pages.map(page => (
                <ListGroupItem key={page.id}>{page.pageName}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Page Events</h5>
            {events && <EventList events={events}/>}
          </Col>
        </Row>
      </Grid>
    )
  }
}

Events.propTypes = {}
Events.defaultProps = {}

function mapStateToProps (state) {
  return {
    pages: state.events.pages,
    events: state.events.eventsList,
  }
}

export default connect(mapStateToProps, {addPage})(Events)

