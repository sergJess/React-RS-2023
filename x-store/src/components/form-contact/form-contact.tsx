import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
import { InputText } from '../input-text/input-text';
import { InputDate } from '../input-date/input-date';
import { InputRadio } from '../input-radio/input-radio';
import { FormIncorrect } from './components/form-incorrect/form-incorrect';
import { SelectOptions } from '../select-options/select-options';
import { validateAll } from '../../utils/validate/validate-all/validate-all';
import { validateAllDataFromForm } from './helpers/validateDataFromForm/validateDataFromForm';
import { getDataFromForm } from './helpers/getDataFromForm/getDataFromForm';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
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
type TFormData = { name: string; surname: string; email: string };
export const FormContact = (props: TFormContactProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    getFieldState,
    setError,
    reset,
  } = useForm<TFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });
  const name = { ...register('name', { validate: validatePersonal }) };
  const surname = { ...register('surname', { required: true, validate: validatePersonal }) };
  const email = { ...register('email', { required: true, validate: validateEmail }) };
  const onSubmit: SubmitHandler<TFormData> = (data) => console.log(data);
  const setDataInvisible = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const clickToSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(getValues());
    console.log(getFieldState('name'));
  };
  // onSubmit={handleSubmit(onSubmit)
  return (
    <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
      <FormIncorrect
        isNotActive={!errors.name}
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Type your name:"
            htmlFor="inactive"
            role="name"
            placeholder="type here"
            register={name}
          />
        }
      />

      <FormIncorrect
        isNotActive={!errors.surname}
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            role="surname"
            inputClass="form-contact__input-text"
            labelText="Type your surname:"
            htmlFor="form-contact-surname"
            placeholder="type here"
            register={surname}
          />
        }
      />
      {/* <FormIncorrect
        isNotActive={state.isInitial || state.validCardDate.isCorrectDate}
        component={
          <InputDate
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Select your birthday date:"
            htmlFor="form-contact-date"
            inputRef={inputDateRef}
          />
        }
      /> */}
      <FormIncorrect
        isNotActive={!errors.email}
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            role="email"
            inputClass="form-contact__input-text"
            labelText="Type your email:"
            htmlFor="form-contact-email"
            placeholder="type here"
            register={email}
          />
        }
      />
      {/* <FormIncorrect
        isNotActive={state.isInitial || state.validCardDate.isCheckedRadio}
        component={
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
        }
      /> */}
      {/* <FormIncorrect
        isNotActive={state.isInitial || state.validCardDate.isEstimated}
        component={
          <SelectOptions
            htmlFor="form-contact-estimate"
            optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
            selectRef={selectRef}
            labelText="How can you estimate our store:"
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            firstOptionText="Choose estimate:"
          />
        }
      /> */}
      {/* <FormIncorrect
        isNotActive={state.isInitial || state.validCardDate.isAttachedFile}
        component={
          <>
            <label className="form-contact__text" htmlFor="form-contact-name">
              Upload your photo or picture:
            </label>
            <input
              className="form-contact__input-text"
              role="input-file"
              ref={inputFileRef}
              type="file"
            />
          </>
        }
      /> */}
      {/* <FormIncorrect
        isNotActive={state.isInitial || state.validCardDate.isAgreement}
        component={
          <>
            <label className="form-contact__text" htmlFor="form-contact-agreement">
              I consent to my personal data:
            </label>
            <input ref={checkAgreementRef} name="form-contact-agreement" type="checkbox" />
          </>
        }
      /> */}
      <button type="submit" className="form-contact__submit">
        Create card
      </button>
      <button onClick={clickToSubmit} className="form-contact__submit">
        test click
      </button>
      {/* <div className={state.isDataOk ? 'form-ok' : 'form-ok form-ok_invisible'}>
        Your data has been safed
        <button className="form-ok__btn" onClick={setDataInvisible}>
          Ok
        </button>
      </div> */}
    </form>
  );
};
