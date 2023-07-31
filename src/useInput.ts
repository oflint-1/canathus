import { useState } from "react";

export const useInput = <Datatype>(
  initialValue: Datatype,
  validate: (value: Datatype) => boolean
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
      setData({
        ...data,
        error: newError,
        errorMsg: newErrorMsg ? newErrorMsg : "",
      });
    },
  });

  /**
   * Update the current value
   * @param newValue New value to update
   */
  const updateValue = (newValue: Datatype) => {
    setData({ ...data, value: newValue });
  };

  return [data, updateValue];
};
