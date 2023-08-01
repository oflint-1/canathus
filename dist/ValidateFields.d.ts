import { InputData } from "./InputData";
/**
 * Interface for fields to pass to validate
 */
export interface ValidateFields<Datatype> {
    [key: string]: InputData<Datatype>;
}
