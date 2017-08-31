import React, { Component } from 'react'
import {
  Grid,
  Row,
  ListGroup,
  ListGroupItem,
  Col, Button,
} from 'react-bootstrap'

import { connect } from 'react-redux'
import AddPageForm from './components/AddPageForm'
import { addPage, removePage } from './actions'
import EventList from './components/EventList'

class Events extends Component {

  onRemovePage = pageId => {
    this.props.removePage(pageId)
  }

  render () {
    const {pages, events} = this.props
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <AddPageForm/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Subscribed Pages</h5>
            <ListGroup>
              {pages && pages.map(page => (
                <ListGroupItem key={page.id}>
                  {page.pageName}
                  <span className="float-md-right">
                    <Button onClick={() => this.onRemovePage(page.id)}
                            bsStyle="danger">Remove</Button>
                  </span>
                </ListGroupItem>
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

export default connect(mapStateToProps, {removePage})(Events)

