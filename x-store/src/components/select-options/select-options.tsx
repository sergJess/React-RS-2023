import React from 'react';
type TSelectOptions = {
  htmlFor: string;
  optionValues: string[];
  selectRef: React.RefObject<HTMLSelectElement>;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  firstOptionText: string;
};
export const SelectOptions = (props: TSelectOptions) => {
  return (
    <div className={props.wrapperClass}>
      <label className={props.labelClass} htmlFor={props.htmlFor}>
        {props.labelText}
      </label>
      <select ref={props.selectRef} name={props.htmlFor} defaultValue="">
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
