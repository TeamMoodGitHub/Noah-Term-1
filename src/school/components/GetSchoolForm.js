import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

class GetSchoolForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      options: [],
    }
  }

  renderTypeahead = ({input, label, ...custom}) => {
    return (
      <AsyncTypeahead
        {...this.state}
        labelKey="school.name"
        onSearch={this.handleSearch}
        placeholder="Search for your school..."
        {...input}
        {...custom}
      />
    )
  }

  submit = values => {

  }

  render () {
    const {handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          <Field name="schoolName" component={this.renderTypeahead}/>
          <Button bsStyle="primary" type="submit">Submit</Button>
        </form>
      </div>
    )
  }

  handleSearch = async query => {
    if (!query) {
      return
    }

    const response = await axios.get(
      `http://api.data.gov/ed/collegescorecard/v1/schools?school.name=${encodeURIComponent(
        query)}&api_key=ewY0BEivFqkmrKrnBQ7McgU685yx2SmLJON4tbFq&_fields=id,school.name,school.alias`)
    const data = response.data
    this.setState({options: data.results})

  }
}

GetSchoolForm.propTypes = {}
GetSchoolForm.defaultProps = {}

export default reduxForm({
  form: 'addSchool',
})(GetSchoolForm)
