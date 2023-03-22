import React from 'react';
export type TInputText = {
  htmlFor: string;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  labelText: string;
  wrapperClass: string;
  labelClass: string;
  inputClass: string;
};
export class InputText extends React.Component<TInputText> {
  constructor(props: TInputText) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label className={this.props.labelClass} htmlFor={this.props.htmlFor}>
          {this.props.labelText}
        </label>
        <input
          className={this.props.inputClass}
          type="text"
          name={this.props.htmlFor}
          ref={this.props.inputRef}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
