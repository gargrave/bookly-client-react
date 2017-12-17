import React from 'react'
import { array, func, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import './styles.css'

const renderText = (text, classname) => (
  text
    ? <p className={buildClasses(classname)}>{text}</p>
    : null
)

const Card = ({
  classes = [],
  onClick,
  text,
  title,
}) => {
  return (
    <div
      className={buildClasses(['card', ...classes])}
      onClick={onClick}>
      {renderText(title, 'card-title')}
      {renderText(text, 'card-text')}
    </div>
  )
}

Card.propTypes = {
  classes: array,
  onClick: func.isRequired,
  text: string,
  title: string,
}

export default Card
