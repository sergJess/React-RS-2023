import React from 'react';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
import { InputText } from '../input-text/input-text';
function validateAll<Type>(data: Type): boolean {
  if (typeof data == 'object' && data) {
    const checkArray = Object.values(data);
    for (let i = 0, length = checkArray.length; i < length; i++) {
      if (!checkArray[i]) return false;
    }
    return true;
  }
  return false;
}
type TFormContactProps = {
  callback: (data: TContactCardProps) => void;
};
type TCardValidate = {
  isCorrectName: boolean;
  isCorerectSurname: boolean;
  isCorrectDate: boolean;
  isCheckedRadio: boolean;
  isAttachedFile: boolean;
  isConcentsAgrrement: boolean;
  isEstimated: boolean;
};
type TFormContactState = {
  cardData: TContactCardProps;
  isDataOk: boolean;
};
export class FormContact extends React.Component<TFormContactProps, TFormContactState> {
  private form: React.RefObject<HTMLFormElement> = React.createRef();
  private inputNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputSurnameRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputDateRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputRadioFirstRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputRadioSecondtRef: React.RefObject<HTMLInputElement> = React.createRef();
  private selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private checkAgreementRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputFileRef: React.RefObject<HTMLInputElement> = React.createRef();
  private initialState: TFormContactState = {
    cardData: {
      name: '',
      surname: '',
      date: '',
      radio: '',
      estimate: '',
      fileUrl: '',
    },
    isDataOk: false,
  };
  constructor(props: TFormContactProps) {
    super(props);
    this.submitBtn = this.submitBtn.bind(this);
    this.setDataInvisible = this.setDataInvisible.bind(this);
    this.clickToSubmit = this.clickToSubmit.bind(this);
    this.state = { ...this.initialState };
  }
  validatePersonal(value: string): boolean {
    const reg = /[A-Z]{1}[a-z-]{1,}/;
    const testString = value.trim();
    if (testString.length == 0) return false;
    return testString.replace(reg, '').length == 0 ? true : false;
  }
  clickToSubmit(e: React.MouseEvent) {
    e.preventDefault();
    const name = this.inputNameRef.current;
    const surname = this.inputSurnameRef.current;
    const date = this.inputDateRef.current;
    const firstRadio = this.inputRadioFirstRef.current;
    const secondRadio = this.inputRadioSecondtRef.current;
    const estimate = this.selectRef.current;
    const checkAgreement = this.checkAgreementRef.current;
    const inputFile = this.inputFileRef.current;
    const validateObject = {
      values: { ...this.initialState.cardData },
      isValid: {
        isCorrectName: false,
        isCorerectSurname: false,
        isCheckedRadio: false,
        isCorrectDate: false,
        isEstimated: false,
        isAgreement: false,
        isAttachedFile: false,
      },
    };
    if (name && this.validatePersonal(name.value)) {
      validateObject.values.name = name.value.trim();
      validateObject.isValid.isCorrectName = true;
    }
    if (surname && this.validatePersonal(surname.value)) {
      validateObject.values.surname = surname.value.trim();
      validateObject.isValid.isCorerectSurname = true;
    }
    if (firstRadio && secondRadio) {
      if (firstRadio.checked) {
        validateObject.values.radio = firstRadio.value;
        validateObject.isValid.isCheckedRadio = true;
      }
      if (secondRadio.checked) {
        validateObject.values.radio = secondRadio.value;
        validateObject.isValid.isCheckedRadio = true;
      }
    }
    if (estimate && estimate.value) {
      validateObject.values.estimate = estimate.value;
      validateObject.isValid.isEstimated = true;
    }
    if (checkAgreement && checkAgreement.checked) {
      validateObject.isValid.isAgreement = true;
    }
    if (date && date.value) {
      validateObject.values.date = date.value;
      validateObject.isValid.isCorrectDate = true;
    }
    if (inputFile && inputFile.files?.length) {
      const file = inputFile.files[0];
      const url = URL.createObjectURL(file);
      validateObject.isValid.isAttachedFile = true;
      validateObject.values.fileUrl = url;
    }
    if (validateAll({ ...validateObject.isValid })) {
      this.props.callback({ ...validateObject.values });
      this.setState({
        cardData: { ...validateObject.values },
        isDataOk: true,
      });
    }
  }
  submitBtn(e: React.MouseEvent) {
    e.preventDefault();
    const name = this.inputNameRef.current;
    const surname = this.inputSurnameRef.current;
    const date = this.inputDateRef.current;
    const firstRadio = this.inputRadioFirstRef.current;
    const secondRadio = this.inputRadioSecondtRef.current;
    const estimate = this.selectRef.current;
    const checkAgreement = this.checkAgreementRef.current;
    if (name && surname && date && firstRadio && secondRadio && estimate && checkAgreement) {
      if (this.validatePersonal(name.value) && this.validatePersonal(surname.value)) {
        let value = '';
        if (firstRadio.checked) value = firstRadio.value;
        if (secondRadio.checked) value = secondRadio.value;

        this.props.callback({
          name: name.value.trim(),
          surname: surname.value.trim(),
          date: date.value,
          radio: value,
          estimate: estimate.value,
        });
        this.setState({
          cardData: {
            name: name.value.trim(),
            surname: surname.value.trim(),
            date: date.value,
            radio: value,
          },
          isDataOk: true,
        });
      }
    }
  }
  setDataInvisible(e: React.MouseEvent) {
    e.preventDefault();
    const form = this.form.current;
    if (form) {
      this.setState({ ...this.initialState });
      form.reset();
    }
  }

  render() {
    return (
      <form className="form-contact" ref={this.form}>
        <div>
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Type your name:"
            htmlFor="form-contact-name"
            placeholder="type here"
            inputRef={this.inputNameRef}
          />
          <span>is not correct</span>
        </div>

        <InputText
          wrapperClass="form-contact__block"
          labelClass="form-contact__text"
          inputClass="form-contact__input-text"
          labelText="Type your surname:"
          htmlFor="form-contact-surname"
          placeholder="type here"
          inputRef={this.inputSurnameRef}
        />
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-date">
            Select your birthday date:
          </label>
          <input
            name="form-contact-date"
            className="form-contact__input-text"
            type="date"
            ref={this.inputDateRef}
          />
        </div>
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-radio">
            Do You want to receive notification about discount promotions,sales, etc:
          </label>
          <span className="form-contact__text">
            Yep
            <input
              ref={this.inputRadioFirstRef}
              className="form-contact__input-text"
              type="radio"
              name="form-contact-radio"
              value="Yep"
            />
          </span>
          <span className="form-contact__text">
            Nope
            <input
              ref={this.inputRadioSecondtRef}
              className="form-contact__input-text"
              type="radio"
              name="form-contact-radio"
              value="Nope"
            />
          </span>
        </div>
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-estimate">
            How can you estimate our store:
          </label>
          <select ref={this.selectRef} name="form-contact-estimate" defaultValue="select estimate">
            <option value="">Choose estimate</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Awful">Awful</option>
          </select>
        </div>
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-name">
            Upload your photo or picture:
          </label>
          <input className="form-contact__input-text" ref={this.inputFileRef} type="file" />
        </div>
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-agreement">
            I consent to my personal data:
          </label>
          <input ref={this.checkAgreementRef} name="form-contact-agreement" type="checkbox" />
        </div>
        <button onClick={this.clickToSubmit}>Create card</button>
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
