export function validatePersonal(value: string): boolean {
  const reg = /[A-Z]{1}[a-z-]{1,}/;
  const testString = value.trim();
  if (testString.length == 0) return false;
  return testString.replace(reg, '').length == 0 ? true : false;
}
