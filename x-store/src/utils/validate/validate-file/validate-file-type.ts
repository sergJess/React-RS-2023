export function validateFile(files: FileList) {
  const file = files[0];
  if (file) {
    const regexp = /.png$|.jpg$|.svg$/;
    const test = regexp.test(file.name);
    const typeReg = /\/png$|\/jpg|\/svg$/;
    const typeTest = typeReg.test(file.type);
    return test || typeTest;
  }
  return false;
}
