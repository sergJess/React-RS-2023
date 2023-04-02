import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './input-radio.css';
type TRadiosBtn = {
  value: string;
  textNearRadioClass: string;
};
type TInputRadio = {
  register: UseFormRegisterReturn;
  wrapperClass: string;
  labelClass: string;
  labelText: string;
  radios: TRadiosBtn[];
};

export const InputRadio = (props: TInputRadio) => {
  return (
    <div className={props.wrapperClass}>
      <label htmlFor={props.register.name} className={props.labelClass}>
        {props.labelText}
      </label>
      {props.radios.map((item, index) => {
        return (
          <span key={index} className={item.textNearRadioClass}>
            {item.value}
            <input type="radio" value={item.value} {...props.register} />
          </span>
        );
      })}
    </div>
  );
};
