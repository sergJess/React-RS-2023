import React from 'react';
export type TInputDate = {
  htmlFor: string;
  inputRef: React.RefObject<HTMLInputElement>;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
  minDate: string;
  maxDate: string;
};
export class InputDate extends React.Component<TInputDate> {
  constructor(props: TInputDate) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label className={this.props.labelClass} htmlFor={this.props.htmlFor}>
          {this.props.labelText}
        </label>
        <input
          min={this.props.minDate}
          max={this.props.maxDate}
          className={this.props.inputClass}
          type="date"
          name={this.props.htmlFor}
          ref={this.props.inputRef}
        />
      </div>
    );
  }
}
