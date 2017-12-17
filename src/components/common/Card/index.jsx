import React from 'react'
import { array, bool, func, string } from 'prop-types'

import { buildClasses } from '@/utils/cssHelpers'

import './styles.css'

const renderText = (text, classname) => (
  text
    ? <p className={buildClasses(classname)}>{text}</p>
    : null
)

const rawClassList = (classes, hoverable) => {
  const extras = []
  if (hoverable) {
    extras.push('hoverable')
  }
  return ['card', ...classes, ...extras]
}

const Card = ({
  children,
  classes = [],
  hoverable = true,
  onClick,
  text,
  title,
}) => {
  return (
    <div
      className={buildClasses(rawClassList(classes, hoverable))}
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
  hoverable: bool,
  onClick: func,
  text: string,
  title: string,
}

export default Card
