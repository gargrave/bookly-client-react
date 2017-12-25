// @flow
import React from 'react';
import { any, array, func, bool, string} from 'prop-types';

import { buildClasses } from '../../../utils/cssHelpers';

import Button from '../../common/Button';

import './styles.css';

type Props = {
  cancelBtnText?: string,
  children?: any,
  classes?: string[],
  disabled?: boolean,
  onCancel?: Function,
  onSubmit: Function,
  submitBtnText?: string,
};

function Form({
  cancelBtnText,
  children,
  classes,
  disabled,
  onCancel,
  onSubmit,
  submitBtnText,
}: Props) {
  return (
    <form
      className={buildClasses(['form', ...(classes || [])])}
      onSubmit={onSubmit}
      noValidate>

      {children}

      <div className="input-field">
        <Button
          canSubmit={true}
          disabled={disabled || false}
          onClick={onSubmit}
          position="left"
          text={submitBtnText || "Submit"}
          type="success"
        />

        {onCancel &&
          <Button
            classes="float-right"
            onClick={onCancel}
            text={cancelBtnText || "Cancel"}
            type="light"
          />
        }
      </div>
    </form>
  );
}

Form.propTypes = {
  cancelBtnText: string,
  children: any,
  classes: array,
  disabled: bool,
  onCancel: func,
  onSubmit: func.isRequired,
  submitBtnText: string,
};

export default Form;
