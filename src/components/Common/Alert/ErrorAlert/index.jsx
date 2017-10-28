import React from 'react'
import { string } from 'prop-types'

import { prependClass } from '@/utils/cssHelpers'

const classes = () => {
  return `${prependClass('alert')} alert alert-danger`
}

const ErrorAlert = ({
  error,
}) => (
  <div className={classes()}>
    {error}
  </div>
)

ErrorAlert.propTypes = {
  error: string.isRequired,
}

export default ErrorAlert
