// @flow
import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';

import { buildClasses } from '../../../utils/cssHelpers';

import './styles.css';

type Props = {
  canSubmit?: boolean,
  classes?: string,
  onClick: Function,
  position?: string,
  text: string,
  type: string,
};

const acceptableTypes = [
  'success',
  'secondary',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

const acceptablePositions = [
  'left',
];

function buttonClass(type: string) {
  if (acceptableTypes.includes(type)) {
    return `button-${type}`;
  }
  return '';
}

function positionClass(position: string) {
  if (acceptablePositions.includes(position)) {
    return `button-${position}`;
  }
  return '';
}

function buildClassList(
  type: string,
  position: string,
  classes: string,
) {
  return buildClasses(
    ['button', positionClass(position)],
    [buttonClass(type), ...classes.split(' ')]
  );
}

function Button({
  canSubmit,
  classes = '',
  onClick,
  position = '',
  text,
  type,
}: Props) {
  return (
    <button
      type={canSubmit ? 'submit' : 'button'}
      className={buildClassList(type, position, classes)}
      onClick={onClick}>
      { text }
    </button>
  );
}

Button.propTypes = {
  canSubmit: bool,
  classes: string,
  onClick: func.isRequired,
  position: oneOf(acceptablePositions),
  text: string.isRequired,
  type: oneOf(acceptableTypes).isRequired,
};

export default Button;
