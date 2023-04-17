export function validateAll<Type>(data: Type): boolean {
  if (typeof data == 'object' && data) {
    const checkArray = Object.values(data);
    for (let i = 0, length = checkArray.length; i < length; i++) {
      if (!checkArray[i]) return false;
    }
    return true;
  }
  return false;
}
