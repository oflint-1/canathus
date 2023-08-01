import { useState } from "react";

export const useInput = <Datatype>(
  initialValue: Datatype,
  validate: (value: Datatype) => { valid: boolean; errorMsg?: string }
) => {
  /**
   * Set initial data value for the input
   */
  const [data, setData] = useState<InputData<Datatype>>({
    value: initialValue,
    error: false,
    errorMsg: "",
    validate,
    setError: (newError: boolean, newErrorMsg?: string) => {
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
