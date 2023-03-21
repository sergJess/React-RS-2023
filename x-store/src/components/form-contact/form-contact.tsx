import React from 'react';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
type TFormContactProps = {
  callback: (data: TContactCardProps) => void;
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
        this.props.callback({ name: name.value.trim(), surname: surname.value.trim() });
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
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-name form-contact__text">
            Type your name:
          </label>
          <input
            className="form-contact__input-text"
            id="form-contact-name"
            type="text"
            ref={this.inputNameRef}
            placeholder="type here"
          />
        </div>
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-surname form-contact__text">
            Type your surname:
          </label>
          <input
            className="form-contact__input-text"
            type="text"
            id="form-contact-surname"
            ref={this.inputSurnameRef}
            placeholder="type here"
          />
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
