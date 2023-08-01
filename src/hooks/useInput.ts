import { useState } from "react";
import { InputData } from "../interfaces/InputData";

export const useInput = <Datatype>(
  initialValue: Datatype,
  validate: (value: Datatype) => { valid: boolean; errorMsg?: string }
): [InputData<Datatype>, (newValue: Datatype) => void] => {
  /**
   * Set initial data value for the input
   */
  const [data, setData] = useState<InputData<Datatype>>({
    value: initialValue,
    error: false,
    errorMsg: "",
    validate,
    setError: (newError: boolean, newErrorMsg?: string) => {
      // Update state with error information
      setData((oldData) => {
        return {
          ...oldData,
          error: newError,
          errorMsg: newErrorMsg ? newErrorMsg : "",
        };
      });
    },
  });

  /**
   * Update the current value
   * @param newValue New value to update
   */
  const updateValue = (newValue: Datatype) => {
    setData((oldData) => {
      return { ...oldData, value: newValue, error: false, errorMsg: "" };
    });
  };

  return [data, updateValue];
};
