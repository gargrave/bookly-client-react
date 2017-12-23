// @flow
import React from 'react'
import { array, object, oneOfType } from 'prop-types'

import { buildClasses } from '../../../utils/cssHelpers'

import './styles.css'

type Props = {
  children?: Array<any>,
}

function ButtonRow ({
  children,
}: Props) {
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
