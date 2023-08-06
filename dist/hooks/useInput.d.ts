import { InputData } from "../interfaces/InputData";
export declare const useInput: <Datatype>(initialValue: Datatype, validator: (value: Datatype) => {
    valid: boolean;
    errorMsg?: string;
}) => [InputData<Datatype>, (newValue: Datatype) => void];
