import React from 'react';
export type TInputDate = {
  htmlFor: string;
  inputRef: React.RefObject<HTMLInputElement>;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
};
export const InputDate = (props: TInputDate) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.htmlFor}>
        {props.labelText}
      </label>
      <input
        className={props.inputClass}
        type="date"
        role="input-date"
        name={props.htmlFor}
        ref={props.inputRef}
      />
    </div>
  );
};
