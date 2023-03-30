import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
type TSelectOptions = {
  optionValues: string[];
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  firstOptionText: string;
  register: UseFormRegisterReturn;
};
export const SelectOptions = (props: TSelectOptions) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.register.name}>
        {props.labelText}
      </label>
      <select {...props.register} defaultValue="">
        <option key="option-0" value="">
          {props.firstOptionText}
        </option>
        {props.optionValues.map((item, index) => {
          return (
            <option key={`option-${index + 1}`} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
