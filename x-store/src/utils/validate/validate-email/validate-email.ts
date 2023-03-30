export function validateEmail(email: string): boolean {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return reg.test(email.trim());
}
