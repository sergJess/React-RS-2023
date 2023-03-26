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
type TInputRadioState = {
  isChecked: boolean;
};
export class InputRadio extends React.Component<TInputRadio, TInputRadioState> {
  constructor(props: TInputRadio) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label htmlFor={this.props.htmlFor} className={this.props.labelClass}>
          {this.props.labelText}
        </label>
        {this.props.radios.map((item, index) => {
          return (
            <span key={index} className={item.textNearRadioClass}>
              {item.value}
              <input
                name={this.props.htmlFor}
                type="radio"
                value={item.value}
                ref={item.inputRef}
              />
            </span>
          );
        })}
      </div>
    );
  }
}
