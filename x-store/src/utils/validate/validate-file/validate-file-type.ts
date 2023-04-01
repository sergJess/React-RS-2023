export function validateFile(files: FileList) {
  const file = files[0];
  if (file) {
    const regexp = /.png$|.jpg$|.svg$/;
    const test = regexp.test(file.name);
    return test;
  }
  return false;
}
