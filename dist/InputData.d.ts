interface InputData<Datatype> {
    value: Datatype;
    error: boolean;
    errorMsg: string;
    validate: (value: Datatype) => boolean;
    setError: (newError: boolean, newErrorMsg?: string) => void;
}
