import React from 'react'
import { array, object, oneOfType } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import './styles.css'

const ButtonRow = ({
  children,
}) => {
  return (
    <div className={buildClasses('button-row')}>
      {children}
    </div>
  )
}

ButtonRow.propTypes = {
  children: oneOfType([array, object]),
}

export default ButtonRow
