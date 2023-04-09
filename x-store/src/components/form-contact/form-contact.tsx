import React from 'react';
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
import { validateFile } from '../../utils/validate/validate-file/validate-file-type';
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
    reset,
  } = useForm<TFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });
  const name = {
    ...register('name', {
      required: 'can not be empty',
      validate: validatePersonal,
    }),
  };
  const surname = {
    ...register('surname', { required: 'can not be empty', validate: validatePersonal }),
  };
  const email = { ...register('email', { required: 'can not be empty', validate: validateEmail }) };
  const date = { ...register('date', { required: 'can not be empty', validate: validateDate }) };
  const selected = { ...register('select', { required: 'must be selected an estimate' }) };
  const radio = { ...register('radio', { required: 'check one of the radio' }) };
  const agreement = { ...register('agreement', { required: 'must be checked' }) };
  const file = {
    ...register('file', {
      required: 'attach file',
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
    <form className="form-contact" role="form" onSubmit={handleSubmit(onSubmit)}>
      <FormIncorrect
        isNotActive={!errors.name}
        errortext={
          errors.name?.message || 'name must have one uppercase letter and min length is 2'
        }
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Type your name:"
            role="name"
            placeholder="type here"
            register={name}
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.surname}
        errortext={
          errors.surname?.message || 'surname must have one uppercase letter and min length is 2'
        }
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            role="surname"
            inputClass="form-contact__input-text"
            labelText="Type your surname:"
            placeholder="type here"
            register={surname}
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.date}
        errortext={errors.date?.message || 'your age must be min 18 years old'}
        component={
          <InputDate
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            inputClass="form-contact__input-text"
            labelText="Select your birthday date:"
            register={date}
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.email}
        errortext={errors.email?.message || 'your email must be correct'}
        component={
          <InputText
            wrapperClass="form-contact__block"
            labelClass="form-contact__text"
            role="email"
            inputClass="form-contact__input-text"
            labelText="Type your email:"
            placeholder="type here"
            register={email}
          />
        }
      />
      <FormIncorrect
        isNotActive={!errors.radio}
        errortext={errors.radio?.message}
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
        errortext={errors.select?.message}
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
        errortext={errors.file?.message || 'file format must be svg, png or jpg'}
        component={
          <div>
            <label className="form-contact__text" htmlFor="file">
              Upload your photo or picture:
            </label>
            <input className="form-contact__input-text" role="input-file" {...file} type="file" />
          </div>
        }
      />
      <FormIncorrect
        isNotActive={!errors.agreement}
        errortext={errors.agreement?.message}
        component={
          <div>
            <label className="form-contact__text" htmlFor="agreement">
              I consent to my personal data:
            </label>
            <input {...agreement} type="checkbox" />
          </div>
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
