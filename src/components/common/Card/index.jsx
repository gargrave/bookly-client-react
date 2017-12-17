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
  children,
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
      {children}
    </div>
  )
}

Card.propTypes = {
  children: array,
  classes: array,
  onClick: func.isRequired,
  text: string,
  title: string,
}

export default Card
