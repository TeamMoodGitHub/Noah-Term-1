import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import FieldInput from '../../shared/FieldInput'
import { Button, ControlLabel, FormGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPage } from '../actions'

class AddPageForm extends Component {
  submit = values => {
    const {reset} = this.props
    this.props.addPage()
    reset()
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <FormGroup>
          <ControlLabel>Add page to subscribe to</ControlLabel>
          {/*TODO: Add capability to search for page to add to subscription list. For now will just use page ids for MVP*/}
          <Field name="newPage" component={FieldInput} type="text"
                 placeholder="Enter page id"/>
        </FormGroup>
        <Button bsStyle="primary" type="submit">
          Add Page
        </Button>
      </form>
    );
  }
}

export default connect(null, {addPage})(
  reduxForm({form: 'addPage'})(AddPageForm))
