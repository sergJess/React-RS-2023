import React from 'react';
import './form-contact.css';
type TFormContactProps = {
  name: string;
};
export class FormContact extends React.Component<TFormContactProps> {
  private inputNameRef: React.RefObject<HTMLInputElement>;
  private inputSurnameRef: React.RefObject<HTMLInputElement>;
  constructor(props: TFormContactProps) {
    super(props);
    this.submitBtn = this.submitBtn.bind(this);
    this.inputNameRef = React.createRef();
    this.inputSurnameRef = React.createRef();
  }
  validatePersonal(value: string): boolean {
    const reg = /[A-Z]{1}[a-z-]{1,}/;
    const testString = value.trim();
    return testString.replace(reg, '').length == 0 ? true : false;
  }
  submitBtn(e: React.MouseEvent) {
    e.preventDefault();
    const name = this.inputNameRef.current;
    const surname = this.inputSurnameRef.current;
    if (name && surname) {
      if (this.validatePersonal(name.value) && this.validatePersonal(surname.value)) {
      }
    }
  }
  render() {
    return (
      <form className="form-contact">
        <div>
          <label htmlFor="form-contact-name">Type your name:</label>
          <input id="form-contact-name" type="text" ref={this.inputNameRef} />
        </div>
        <div>
          <label htmlFor="form-contact-surname">Type your surname:</label>
          <input type="text" id="form-contact-surname" ref={this.inputSurnameRef} />
        </div>
        <button onClick={this.submitBtn}>Create card</button>
      </form>
    );
  }
}
