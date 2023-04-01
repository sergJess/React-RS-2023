import React from 'react';
import './form-incorrect.css';
export type TFormIncorrect = {
  component: JSX.Element;
  isNotActive: boolean;
  errortext?: string;
};
export const FormIncorrect = (props: TFormIncorrect) => {
  return (
    <div
      className={
        props.isNotActive
          ? 'form-contact__block-warapper '
          : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
      }
    >
      {props.component}
      <span
        className={
          props.isNotActive
            ? 'form-contact__incorrect-text form-contact__incorrect_hide'
            : 'form-contact__incorrect-text form-contact__incorrect_show'
        }
      >
        is not correct{`: ${props.errortext}`}
      </span>
    </div>
  );
};
