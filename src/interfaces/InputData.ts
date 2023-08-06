/**
 * Interface for format that useInput hook takes
 */
export interface InputData<Datatype> {
  value: Datatype;
  error: boolean;
  errorMsg: string;
  validator: (value: Datatype) => { valid: boolean; errorMsg?: string }; // Validate current value
  setError: (newError: boolean, newErrorMsg?: string) => void; // Update internal error
}
