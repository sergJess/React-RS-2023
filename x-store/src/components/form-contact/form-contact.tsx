import React, { useState, useRef } from 'react';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
import { InputText } from '../input-text/input-text';
import { InputDate } from '../input-date/input-date';
import { InputRadio } from '../input-radio/input-radio';
import { SelectOptions } from '../select-options/select-options';
import { validateAll } from '../../utils/validate/validate-all/validate-all';
import { validateAllDataFromForm } from './helpers/validateDataFromForm/validateDataFromForm';
import { getDataFromForm } from './helpers/getDataFromForm/getDataFromForm';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
import { validateDate } from '../../utils/validate/validate-date/validate-date';
import { validateEmail } from '../../utils/validate/validate-email/validate-email';
type TFormContactProps = {
  callback: (data: TContactCardProps) => void;
};
export type TCardValidate = {
  isCorrectName: boolean;
  isCorerectSurname: boolean;
  isCorrectDate: boolean;
  isCheckedRadio: boolean;
  isCorrectEmail: boolean;
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
export type TFormDatas = {
  name: string;
  surname: string;
  email: string;
  file: HTMLInputElement['files'];
  estimate: string;
  radious: HTMLInputElement[];
  date: string;
  agreement: HTMLInputElement;
};
export const FormContact = (props: TFormContactProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputSurnameRef = useRef<HTMLInputElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputDateRef = useRef<HTMLInputElement | null>(null);
  const inputRadioFirstRef = useRef<HTMLInputElement | null>(null);
  const inputRadioSecondRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const checkAgreementRef = useRef<HTMLInputElement | null>(null);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const initialState: TFormContactState = {
    cardData: {
      name: '',
      surname: '',
      email: '',
      date: '',
      radio: '',
      estimate: '',
      fileUrl: '',
    },
    validCardDate: {
      isCorrectName: false,
      isCorerectSurname: false,
      isCorrectEmail: false,
      isCheckedRadio: false,
      isCorrectDate: false,
      isEstimated: false,
      isAgreement: false,
      isAttachedFile: false,
    },
    isDataOk: false,
    isInitial: true,
  };
  const [state, setState] = useState({ ...initialState });
  const clickToSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const formData = {
      name: inputNameRef.current!.value.trim(),
      surname: inputSurnameRef.current!.value.trim(),
      email: inputEmailRef.current!.value,
      date: inputDateRef.current!.value,
      agreement: checkAgreementRef.current!,
      estimate: selectRef.current!.value,
      radious: [inputRadioFirstRef.current!, inputRadioSecondRef.current!],
      file: inputFileRef.current!.files,
    };
    const validateObject = {
      ...validateAllDataFromForm(
        {
          ...formData,
        },
        { ...initialState.validCardDate }
      ),
    };
    if (validateAll({ ...validateObject })) {
      const dataObject = { ...getDataFromForm({ ...formData }, { ...initialState.cardData }) };
      props.callback({ ...dataObject });
      setState({
        cardData: { ...dataObject },
        validCardDate: { ...validateObject },
        isDataOk: true,
        isInitial: false,
      });
      return;
    }
    setState({
      cardData: { ...state.cardData },
      validCardDate: { ...validateObject },
      isDataOk: false,
      isInitial: false,
    });
  };
  const setDataInvisible = (e: React.MouseEvent) => {
    e.preventDefault();
    const formRef = form.current!;
    setState({ ...initialState });
    formRef.reset();
  };
  return (
    <form className="form-contact" ref={form}>
      <div
        className={
          state.isInitial || state.validCardDate.isCorrectName
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
          role="name"
          placeholder="type here"
          inputRef={inputNameRef}
        />
        <span
          className={
            state.isInitial || state.validCardDate.isCorrectName
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isCorerectSurname
            ? 'form-contact__block-warapper'
            : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
        }
      >
        <InputText
          wrapperClass="form-contact__block"
          labelClass="form-contact__text"
          role="surname"
          inputClass="form-contact__input-text"
          labelText="Type your surname:"
          htmlFor="form-contact-surname"
          placeholder="type here"
          inputRef={inputSurnameRef}
        />
        <span
          className={
            state.isInitial || state.validCardDate.isCorerectSurname
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isCorrectDate
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
          inputRef={inputDateRef}
        />
        <span
          className={
            state.isInitial || state.validCardDate.isCorrectDate
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isCorrectEmail
            ? 'form-contact__block-warapper'
            : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
        }
      >
        <InputText
          wrapperClass="form-contact__block"
          labelClass="form-contact__text"
          role="email"
          inputClass="form-contact__input-text"
          labelText="Type your email:"
          htmlFor="form-contact-email"
          placeholder="type here"
          inputRef={inputEmailRef}
        />
        <span
          className={
            state.isInitial || state.validCardDate.isCorrectEmail
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isCheckedRadio
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
              inputRef: inputRadioFirstRef,
            },
            {
              value: 'Nope',
              textNearRadioClass: 'form-contact__text',
              inputRef: inputRadioSecondRef,
            },
          ]}
        />
        <span
          className={
            state.isInitial || state.validCardDate.isCheckedRadio
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isEstimated
            ? 'form-contact__block-warapper'
            : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
        }
      >
        <SelectOptions
          htmlFor="form-contact-estimate"
          optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
          selectRef={selectRef}
          labelText="How can you estimate our store:"
          wrapperClass="form-contact__block"
          labelClass="form-contact__text"
          firstOptionText="Choose estimate:"
        />
        <span
          className={
            state.isInitial || state.validCardDate.isEstimated
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isAttachedFile
            ? 'form-contact__block-warapper'
            : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
        }
      >
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-name">
            Upload your photo or picture:
          </label>
          <input
            className="form-contact__input-text"
            role="input-file"
            ref={inputFileRef}
            type="file"
          />
        </div>
        <span
          className={
            state.isInitial || state.validCardDate.isAttachedFile
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>
      <div
        className={
          state.isInitial || state.validCardDate.isAgreement
            ? 'form-contact__block-warapper'
            : 'form-contact__block-warapper form-contact__block-warapper_incorrect'
        }
      >
        <div className="form-contact__block">
          <label className="form-contact__text" htmlFor="form-contact-agreement">
            I consent to my personal data:
          </label>
          <input ref={checkAgreementRef} name="form-contact-agreement" type="checkbox" />
        </div>
        <span
          className={
            state.isInitial || state.validCardDate.isAgreement
              ? 'form-contact__incorrect-text form-contact__incorrect_hide'
              : 'form-contact__incorrect-text form-contact__incorrect_show'
          }
        >
          is not correct
        </span>
      </div>

      <button className="form-contact__submit" onClick={clickToSubmit}>
        Create card
      </button>
      <div className={state.isDataOk ? 'form-ok' : 'form-ok form-ok_invisible'}>
        Your data has been safed
        <button className="form-ok__btn" onClick={setDataInvisible}>
          Ok
        </button>
      </div>
    </form>
  );
};
