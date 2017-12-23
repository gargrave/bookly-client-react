// @flow
import React from 'react';
import { array, bool, func, string } from 'prop-types';

import { buildClasses } from '../../../utils/cssHelpers';

import './styles.css';

type Props = {
  children?: any[],
  classes?: string[],
  hoverable?: boolean,
  onClick?: Function,
  text?: string,
  title?: string,
};

function renderText(text?: string, classname: string) {
  return (
    text
      ? <p className={buildClasses(classname)}>{text}</p>
      : null
  );
}

function rawClassList(
  classes: string[] = [],
  hoverable: boolean = true
) {
  const extras = [];
  if (hoverable) {
    extras.push('hoverable');
  }
  return ['card', ...classes, ...extras];
}

function Card({
  children,
  classes,
  hoverable,
  onClick,
  text,
  title,
}: Props) {
  return (
    <div
      className={buildClasses(rawClassList(classes, hoverable))}
      onClick={onClick}
    >
      {renderText(title, 'card-title')}
      {renderText(text, 'card-text')}
      {children}
    </div>
  );
}

Card.propTypes = {
  children: array,
  classes: array,
  hoverable: bool,
  onClick: func,
  text: string,
  title: string,
};

export default Card;
