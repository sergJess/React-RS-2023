import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form-contact.css';
import { TContactCardProps } from '../contact-card/contact-card';
import { InputText } from '../input-text/input-text';
import { InputDate } from '../input-date/input-date';
import { InputRadio } from '../input-radio/input-radio';
import { FormIncorrect } from './components/form-incorrect/form-incorrect';
import { SelectOptions } from '../select-options/select-options';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
import { validateEmail } from '../../utils/validate/validate-email/validate-email';
import { validateDate } from '../../utils/validate/validate-date/validate-date';
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
type TFormData = {
  name: string;
  surname: string;
  email: string;
  date: string;
  select: string;
  radio: string;
  agreement: string;
  file: FileList;
};
export const FormContact = (props: TFormContactProps) => {
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    getValues,
    setError,
    reset,
  } = useForm<TFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });
  const validateFile = (files: FileList) => {
    const file = files[0];
    if (file) {
      const regexp = /.png$|.jpg$|.svg$/;
      const test = regexp.test(file.name);
      return test;
    }
    return false;
  };
  const name = { ...register('name', { validate: validatePersonal }) };
  const surname = { ...register('surname', { required: true, validate: validatePersonal }) };
  const email = { ...register('email', { required: true, validate: validateEmail }) };
  const date = { ...register('date', { required: true, validate: validateDate }) };
  const selected = { ...register('select', { required: true }) };
  const radio = { ...register('radio', { required: true }) };
  const agreement = { ...register('agreement', { required: true }) };
  const file = {
    ...register('file', {
      required: true,
      validate: validateFile,
    }),
  };
  const onSubmit: SubmitHandler<TFormData> = (data) => {
    const fileUrl = URL.createObjectURL(data.file[0]);
    props.callback({
      name: data.name.trim(),
      surname: data.name.trim(),
      email: data.email.trim(),
      date: data.date.trim(),
      estimate: data.select,
      radio: data.radio,
      fileUrl: fileUrl,
    });
  };
  const setDataInvisible = (e: React.MouseEvent) => {
    e.preventDefault();
    reset();
  };
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
      <FormIncorrect
        isNotActive={!errors.date}
        component={
          <InputDate
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Select your birthday date:"
            htmlFor="form-contact-date"
            register={date}
          />
        }
      />
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
      <FormIncorrect
        isNotActive={!errors.radio}
        component={
          <InputRadio
            register={radio}
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            labelText=" Do You want to receive notification about discount promotions,sales, etc:"
            radios={[
              {
                value: 'Yep',
                textNearRadioClass: 'form-contact__text',
              },
              {
                value: 'Nope',
                textNearRadioClass: 'form-contact__text',
              },
            ]}
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.select}
        component={
          <SelectOptions
            optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
            register={selected}
            labelText="How can you estimate our store:"
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            firstOptionText="Choose estimate:"
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.file}
        component={
          <>
            <label className="form-contact__text" htmlFor="form-contact-name">
              Upload your photo or picture:
            </label>
            <input
              className="form-contact__input-text"
              // accept="image/*"
              role="input-file"
              {...file}
              type="file"
            />
          </>
        }
      />
      <FormIncorrect
        isNotActive={!errors.agreement}
        component={
          <>
            <label className="form-contact__text" htmlFor="form-contact-agreement">
              I consent to my personal data:
            </label>
            <input {...agreement} type="checkbox" />
          </>
        }
      />
      <button type="submit" className="form-contact__submit">
        Create card
      </button>
      <div className={isSubmitSuccessful ? 'form-ok' : 'form-ok form-ok_invisible'}>
        Your data has been safed
        <button className="form-ok__btn" onClick={setDataInvisible}>
          Ok
        </button>
      </div>
    </form>
  );
};
