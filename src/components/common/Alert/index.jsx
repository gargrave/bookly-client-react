import React from 'react'
import { oneOf, string } from 'prop-types'

import { prependClass } from '@/utils/cssHelpers'

const classes = (type) => {
  return `${prependClass('alert')} alert alert-${type}`
}

const Alert = ({
  message,
  type,
}) => (
  <div className={classes(type)}>
    {message}
  </div>
)

Alert.propTypes = {
  message: string.isRequired,
  type: oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]).isRequired,
}

export default Alert
