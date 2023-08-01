import { InputData } from "./InputData";
export interface ValidateFields<Datatype> {
    [key: string]: InputData<Datatype>;
}
