import React from 'react'
import { reduxForm, Field } from 'redux-form'
import FieldInput from '../../shared/FieldInput'
import { Button, ControlLabel, FormGroup } from 'react-bootstrap'

function AddPageForm ({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <ControlLabel>Add page to subscribe to</ControlLabel>
        {/*TODO: Add capability to search for page to add to subscription list. For now will just use page ids for MVP*/}
        <Field name="newPage" component={FieldInput} type="text"
               placeholder="Enter page id"/>
      </FormGroup>
      <Button bsStyle="primary" type="submit">Add Page</Button>
    </form>
  )
}

export default reduxForm({form: 'addPage'})(AddPageForm)
