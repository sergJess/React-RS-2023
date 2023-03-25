import React from 'react';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
import { InputText } from '../input-text/input-text';
import { InputDate } from '../input-date/input-date';
import { InputRadio } from '../input-radio/input-radio';
import { SelectOptions } from '../select-options/select-options';
import { validateAll } from '../../utils/validate/validate-all/validate-all';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
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
  private inputRadioSecondRef: React.RefObject<HTMLInputElement> = React.createRef();
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
  validateAllData(data: TFormDatas): TCardValidate {
    const validateObj = { ...this.initialState.validCardDate };
    if (validatePersonal(data.name)) {
      validateObj.isCorrectName = true;
    }
    if (validatePersonal(data.surname)) {
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
    const secondRadio = this.inputRadioSecondRef.current!;
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
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isCorrectName
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
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
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isCorerectSurname
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Type your surname:"
            htmlFor="form-contact-surname"
            placeholder="type here"
            inputRef={this.inputSurnameRef}
          />
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isCorerectSurname
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isCorrectDate
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <InputDate
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Select your birthday date:"
            htmlFor="form-contact-date"
            minDate="1910-2-31"
            maxDate="2014-11-11"
            inputRef={this.inputDateRef}
          />
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isCorrectDate
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isCheckedRadio
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <InputRadio
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            labelText=" Do You want to receive notification about discount promotions,sales, etc:"
            htmlFor="form-contact-radio"
            radios={[
              {
                value: 'Yep',
                textNearRadioClass: 'form-contact__text',
                inputRef: this.inputRadioFirstRef,
              },
              {
                value: 'Nope',
                textNearRadioClass: 'form-contact__text',
                inputRef: this.inputRadioSecondRef,
              },
            ]}
          />
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isCheckedRadio
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isEstimated
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <SelectOptions
            htmlFor="form-contact-estimate"
            optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
            selectRef={this.selectRef}
            labelText="How can you estimate our store:"
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            firstOptionText="Choose estimate:"
          />
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isEstimated
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isAttachedFile
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <div className="form-contact__block">
            <label className="form-contact__text" htmlFor="form-contact-name">
              Upload your photo or picture:
            </label>
            <input className="form-contact__input-text" ref={this.inputFileRef} type="file" />
          </div>
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isAttachedFile
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>
        <div
          className={
            this.state.isInitial || this.state.validCardDate.isAgreement
              ? 'form-contact__block-warapper'
              : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
          }
        >
          <div className="form-contact__block">
            <label className="form-contact__text" htmlFor="form-contact-agreement">
              I consent to my personal data:
            </label>
            <input ref={this.checkAgreementRef} name="form-contact-agreement" type="checkbox" />
          </div>
          <span
            className={
              this.state.isInitial || this.state.validCardDate.isAgreement
                ? 'form-contact__incorrect-text form-contact__incorrect_hide'
                : 'form-contact__incorrect-text form-contact__incorrect_show'
            }
          >
            is not correct
          </span>
        </div>

        <button className="form-contact__submit" onClick={this.clickToSubmit}>
          Create card
        </button>
        <div className={this.state.isDataOk ? 'form-ok' : 'form-ok form-ok_invisible'}>
          Your data has been safed
          <button className="form-ok__btn" onClick={this.setDataInvisible}>
            Ok
          </button>
        </div>
      </form>
    );
  }
}
