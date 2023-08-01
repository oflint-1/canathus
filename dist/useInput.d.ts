export declare const useInput: <Datatype>(initialValue: Datatype, validate: (value: Datatype) => boolean) => (InputData<Datatype> | ((newValue: Datatype) => void))[];
