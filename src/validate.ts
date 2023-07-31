export const validate = (fields: ValidateFields) => {
  let valid = true;
  for (let key in fields) {
    const data = fields[key];
    if (!data.validate(data.value)) {
      valid = false;
      data.setError(true);
    }
  }
  return valid;
};
