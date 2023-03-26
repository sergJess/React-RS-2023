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
export class SelectOptions extends React.Component<TSelectOptions> {
  constructor(props: TSelectOptions) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label className={this.props.labelClass} htmlFor={this.props.htmlFor}>
          {this.props.labelText}
        </label>
        <select ref={this.props.selectRef} name={this.props.htmlFor} defaultValue="">
          <option key="option-0" value="">
            {this.props.firstOptionText}
          </option>
          {this.props.optionValues.map((item, index) => {
            return (
              <option key={`option-${index + 1}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
