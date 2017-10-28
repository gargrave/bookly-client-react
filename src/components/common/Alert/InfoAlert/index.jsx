import React from 'react'
import { string } from 'prop-types'

import { prependClass } from '@/utils/cssHelpers'

const classes = () => {
  return `${prependClass('alert')} alert alert-info`
}

const InfoAlert = ({
  message,
}) => (
  <div className={classes()}>
    {message}
  </div>
)

InfoAlert.propTypes = {
  message: string.isRequired,
}

export default InfoAlert
