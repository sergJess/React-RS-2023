import React from 'react';
import './input-radio.css';
type TRadiosBtn = {
  value: string;
  inputRef: React.RefObject<HTMLInputElement>;
  textNearRadioClass: string;
};
type TInputRadio = {
  wrapperClass: string;
  labelClass: string;
  labelText: string;
  htmlFor: string;
  radios: TRadiosBtn[];
};

export const InputRadio = (props: TInputRadio) => {
  return (
    <div className={props.wrapperClass}>
      <label htmlFor={props.htmlFor} className={props.labelClass}>
        {props.labelText}
      </label>
      {props.radios.map((item, index) => {
        return (
          <span key={index} className={item.textNearRadioClass}>
            {item.value}
            <input name={props.htmlFor} type="radio" value={item.value} ref={item.inputRef} />
          </span>
        );
      })}
    </div>
  );
};
