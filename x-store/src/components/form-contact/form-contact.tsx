import React from 'react';
import './form-contact.css';
type TFormContactProps = {
  name: string;
};
type TFormContactState = {
  name: string;
  surname: string;
  isDataOk: boolean;
};
export class FormContact extends React.Component<TFormContactProps, TFormContactState> {
  private form: React.RefObject<HTMLFormElement>;
  private inputNameRef: React.RefObject<HTMLInputElement>;
  private inputSurnameRef: React.RefObject<HTMLInputElement>;
  constructor(props: TFormContactProps) {
    super(props);
    this.submitBtn = this.submitBtn.bind(this);
    this.form = React.createRef();
    this.inputNameRef = React.createRef();
    this.inputSurnameRef = React.createRef();
    this.setDataInvisible = this.setDataInvisible.bind(this);
    this.state = { name: '', surname: '', isDataOk: false };
  }
  validatePersonal(value: string): boolean {
    const reg = /[A-Z]{1}[a-z-]{1,}/;
    const testString = value.trim();
    if (testString.length == 0) return false;
    return testString.replace(reg, '').length == 0 ? true : false;
  }
  componentDidUpdate(): void {}
  submitBtn(e: React.MouseEvent) {
    e.preventDefault();
    const name = this.inputNameRef.current;
    const surname = this.inputSurnameRef.current;
    if (name && surname) {
      if (this.validatePersonal(name.value) && this.validatePersonal(surname.value)) {
        this.setState({ name: name.value.trim(), surname: surname.value.trim(), isDataOk: true });
      }
    }
  }
  setDataInvisible(e: React.MouseEvent) {
    e.preventDefault();
    const form = this.form.current;
    if (form) {
      this.setState({ name: '', surname: '', isDataOk: false });
      form.reset();
    }
  }
  render() {
    return (
      <form className="form-contact" ref={this.form}>
        <div>
          <label htmlFor="form-contact-name">Type your name:</label>
          <input id="form-contact-name" type="text" ref={this.inputNameRef} />
        </div>
        <div>
          <label htmlFor="form-contact-surname">Type your surname:</label>
          <input type="text" id="form-contact-surname" ref={this.inputSurnameRef} />
        </div>
        <button onClick={this.submitBtn}>Create card</button>
        <div
          className={this.state.isDataOk ? 'form-ok form-ok_visible' : 'form-ok form-ok_invisible'}
        >
          Your data has been safed
          <button onClick={this.setDataInvisible}>Ok</button>
        </div>
      </form>
    );
  }
}
