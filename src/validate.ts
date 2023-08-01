import { ValidateFields } from "./ValidateFields";

/**
 *
 * @param fields
 * @returns
 */
export const validate = <Datatype>(fields: ValidateFields<Datatype>) => {
  let allValid = true;
  for (let key in fields) {
    const data = fields[key];
    const { valid, errorMsg } = data.validate(data.value);
    if (!valid) {
      allValid = false;
      data.setError(true, errorMsg);
    } else {
      data.setError(false, errorMsg);
    }
  }
  return allValid;
};
