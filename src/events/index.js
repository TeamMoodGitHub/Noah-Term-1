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

class Events extends Component {

  submit = values => {
    this.props.addPage()
  }

  render () {
    const {handleSubmit, pages} = this.props
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
      </Grid>
    )
  }
}

Events.propTypes = {}
Events.defaultProps = {}

function mapStateToProps (state) {
  return {
    pages: state.events.pages,
  }
}

export default connect(mapStateToProps, {addPage})(Events)

