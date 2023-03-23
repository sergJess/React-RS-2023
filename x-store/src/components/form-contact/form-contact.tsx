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
  isAgreement: boolean;
  isEstimated: boolean;
};
type TFormContactState = {
  cardData: TContactCardProps;
  validCardDate: TCardValidate;
  isDataOk: boolean;
  isInitial: boolean;
};
type TFormDatas = {
  name: string;
  surname: string;
  file: HTMLInputElement['files'];
  estimate: string;
  radious: HTMLInputElement[];
  date: string;
  agreement: HTMLInputElement;
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
    validCardDate: {
      isCorrectName: false,
      isCorerectSurname: false,
      isCheckedRadio: false,
      isCorrectDate: false,
      isEstimated: false,
      isAgreement: false,
      isAttachedFile: false,
    },
    isDataOk: false,
    isInitial: true,
  };
  constructor(props: TFormContactProps) {
    super(props);
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
  validateAllData(data: TFormDatas): TCardValidate {
    const validateObj = { ...this.initialState.validCardDate };
    if (this.validatePersonal(data.name)) {
      validateObj.isCorrectName = true;
    }
    if (this.validatePersonal(data.surname)) {
      validateObj.isCorerectSurname = true;
    }
    if (data.file?.length) {
      validateObj.isAttachedFile = true;
    }
    if (data.date) {
      validateObj.isCorrectDate = true;
    }
    if (data.estimate) {
      validateObj.isEstimated = true;
    }
    if (data.radious.length) {
      data.radious.map((item) => {
        if (item.checked) {
          validateObj.isCheckedRadio = true;
        }
      });
    }
    if (data.agreement.checked) {
      validateObj.isAgreement = true;
    }
    return validateObj;
  }
  getDataFromForm(dataForm: TFormDatas): TContactCardProps {
    const data = { ...this.initialState.cardData };
    data.name = dataForm.name;
    data.surname = dataForm.surname;
    data.date = dataForm.date;
    data.estimate = dataForm.estimate;
    if (dataForm.file?.length) {
      const url = URL.createObjectURL(dataForm.file[0]);
      data.fileUrl = url;
    }
    dataForm.radious.map((item) => {
      if (item.checked) data.radio = item.value;
    });
    return data;
  }
  clickToSubmit(e: React.MouseEvent): void {
    e.preventDefault();
    const name = this.inputNameRef.current!.value.trim();
    const surname = this.inputSurnameRef.current!.value.trim();
    const date = this.inputDateRef.current!.value;
    const firstRadio = this.inputRadioFirstRef.current!;
    const secondRadio = this.inputRadioSecondtRef.current!;
    const estimate = this.selectRef.current!.value;
    const checkAgreement = this.checkAgreementRef.current!;
    const inputFile = this.inputFileRef.current!.files;
    const formData = {
      name: name,
      surname: surname,
      date: date,
      agreement: checkAgreement,
      estimate: estimate,
      radious: [firstRadio, secondRadio],
      file: inputFile,
    };
    const validateObject = {
      ...this.validateAllData({
        ...formData,
      }),
    };
    if (validateAll({ ...validateObject })) {
      const dataObject = { ...this.getDataFromForm({ ...formData }) };
      this.props.callback({ ...dataObject });
      this.setState({
        cardData: { ...dataObject },
        validCardDate: { ...validateObject },
        isDataOk: true,
        isInitial: false,
      });
      return;
    }
    this.setState({
      validCardDate: { ...validateObject },
      isDataOk: false,
      isInitial: false,
    });
  }
  setDataInvisible(e: React.MouseEvent) {
    e.preventDefault();
    const form = this.form.current!;
    this.setState({ ...this.initialState });
    form.reset();
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
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isCorrectName
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
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
