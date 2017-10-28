import React from 'react'
import { string } from 'prop-types'

const ErrorAlert = (props) => (
  <div>
    {!!props.error &&
      <div className="alert alert-danger">
        {props.error}
      </div>}
  </div>
)

ErrorAlert.propTypes = {
  error: string.isRequired,
}

export default ErrorAlert
