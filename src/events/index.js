import React, { Component } from 'react'
import {
  Grid,
  Row,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
} from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Events extends Component {
  render () {
    const {handleSubmit, pages} = this.props
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <ControlLabel>Add page to subscribe to</ControlLabel>
                {/*TODO: Add capability to search for page to add to subscription list. For now will just use page ids for MVP*/}
                <Field component={FormControl} type="text"
                       placeholder="Enter page id"/>
              </FormGroup>
              <Button bsStyle="primary" type="submit">Add Page</Button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Subscribed Pages</h5>
            <ListGroup>
              {pages.map(page => (
                <ListGroupItem>{page}</ListGroupItem>
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

const formedComponent = reduxForm('addPage')(Events)
const connectedComponent = connect(mapStateToProps, null)(formedComponent)

export default connectedComponent
