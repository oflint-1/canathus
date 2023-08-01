interface InputData<Datatype> {
  value: Datatype;
  error: boolean;
  errorMsg: string;
  validate: (value: Datatype) => { valid: boolean; errorMsg?: string };
  setError: (newError: boolean, newErrorMsg?: string) => void;
}
