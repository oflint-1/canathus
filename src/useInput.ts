import { useState } from "react";

export const useInput = <Datatype>(
  initialValue: Datatype,
  validate: () => boolean
) => {
  /**
   * Set initial data value for the input
   */
  const [data, setData] = useState<inputData>({
    value: initialValue,
    error: false,
    errorMsg: "",
    errorStyle: "",
    validate,
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
