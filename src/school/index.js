import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import GetSchoolForm from './components/GetSchoolForm'

class School extends Component {
  render () {
    const {schoolName, schoolAlias, schoolPages, loading} = this.props
    return (
      <Grid>
        <Row>
          <h2>
            Enter in the name of your school to find pages to subscribe to
          </h2>
        </Row>
        <Row>
          <Col md={4}>
            <GetSchoolForm/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Your School: </h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

School.propTypes = {}
School.defaultProps = {}

function mapStateToProps (state) {
  return {
    schoolName: state.school.schoolName,
    schoolAlias: state.school.schoolAlias,
    schoolPages: state.school.schoolPages,
    loading: state.school.loading,
  }
}

export default connect(mapStateToProps)(School)
