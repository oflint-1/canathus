import { InputData } from "./InputData";

/**
 * Interface for fields to pass to validate
 */
export interface ValidateFields<Datatype> {
  // Any to allow any data type
  [key: string]: InputData<Datatype>;
}
