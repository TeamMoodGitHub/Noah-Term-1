import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import GetSchoolForm from './components/GetSchoolForm'

class School extends Component {
  render () {
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

          </Col>
        </Row>
      </Grid>
    );
  }
}

School.propTypes = {}
School.defaultProps = {}

export default School
