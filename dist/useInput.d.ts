export declare const useInput: <Datatype>(initialValue: Datatype, validate: (value: Datatype) => {
    valid: boolean;
    errorMsg?: string;
}) => (InputData<Datatype> | ((newValue: Datatype) => void))[];
