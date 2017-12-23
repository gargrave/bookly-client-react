// @flow
import React from 'react';
import { array } from 'prop-types';

import { buildClasses } from '../../../utils/cssHelpers';

import './styles.css';

type Props = {
  children?: any[],
}

function CardList({
  children,
}: Props) {
  return (
    <div className={buildClasses(['card-list'])}>
      {children}
    </div>
  );
}

CardList.propTypes = {
  children: array,
};

export default CardList;
