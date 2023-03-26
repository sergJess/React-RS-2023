export function validateDate(dateValue: string) {
  const currentDate = new Date();
  const startBirthday = 18;
  const endBirthday = 125;
  const minYear = currentDate.getFullYear() - startBirthday;
  const maxYear = currentDate.getFullYear() - endBirthday;
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const dateMax = new Date(`${maxYear}-${month}-${day}`).getTime();
  const dateMin = new Date(`${minYear}-${month}-${day}`).getTime();
  const inputDate = new Date(dateValue).getTime();
  if (inputDate) {
    return inputDate >= dateMax && inputDate <= dateMin ? true : false;
  }
  return false;
}
