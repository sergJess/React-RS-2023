import { TFormDatas } from '../../form-contact';
import { TContactCardProps } from '../../../contact-card/contact-card';
export function getDataFromForm(
  dataForm: TFormDatas,
  initialData: TContactCardProps
): TContactCardProps {
  const data = { ...initialData };
  data.name = dataForm.name;
  data.surname = dataForm.surname;
  data.date = dataForm.date;
  data.email = dataForm.email;
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
