import { TFormDatas, TCardValidate } from '../../form-contact';
import { validatePersonal } from '../../../../utils/validate/validate-personal/validate-personal';
import { validateEmail } from '../../../../utils/validate/validate-email/validate-email';
import { validateDate } from '../../../../utils/validate/validate-date/validate-date';
export function validateAllDataFromForm(
  data: TFormDatas,
  initialValidate: TCardValidate
): TCardValidate {
  const validateObj = { ...initialValidate };
  if (validatePersonal(data.name)) {
    validateObj.isCorrectName = true;
  }
  if (validatePersonal(data.surname)) {
    validateObj.isCorerectSurname = true;
  }
  if (data.file?.length) {
    validateObj.isAttachedFile = true;
  }
  if (validateEmail(data.email)) {
    validateObj.isCorrectEmail = true;
  }
  if (validateDate(data.date)) {
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
