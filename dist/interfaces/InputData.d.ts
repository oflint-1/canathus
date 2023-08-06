/**
 * Interface for format that useInput hook takes
 */
export interface InputData<Datatype> {
    value: Datatype;
    error: boolean;
    errorMsg: string;
    validator: (value: Datatype) => {
        valid: boolean;
        errorMsg?: string;
    };
    setError: (newError: boolean, newErrorMsg?: string) => void;
}
