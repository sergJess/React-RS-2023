import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export type TInputText = {
  placeholder: string;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
  role: string;
  register: UseFormRegisterReturn;
};
export const InputText = (props: TInputText) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.register.name}>
        {props.labelText}
      </label>
      <input
        className={props.inputClass}
        type="text"
        role={props.role}
        placeholder={props.placeholder}
        {...props.register}
      />
    </div>
  );
};
