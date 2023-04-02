import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export type TInputDate = {
  register: UseFormRegisterReturn;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
};
export const InputDate = (props: TInputDate) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.register.name}>
        {props.labelText}
      </label>
      <input className={props.inputClass} type="date" role="input-date" {...props.register} />
    </div>
  );
};
