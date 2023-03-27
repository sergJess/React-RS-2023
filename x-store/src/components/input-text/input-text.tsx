import React from 'react';
export type TInputText = {
  htmlFor: string;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
  role: string;
};
export const InputText = (props: TInputText) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.htmlFor}>
        {props.labelText}
      </label>
      <input
        className={props.inputClass}
        type="text"
        name={props.htmlFor}
        ref={props.inputRef}
        role={props.role}
        placeholder={props.placeholder}
      />
    </div>
  );
};
