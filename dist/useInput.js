"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
const react_1 = require("react");
const useInput = (initialValue, validate) => {
    /**
     * Set initial data value for the input
     */
    const [data, setData] = (0, react_1.useState)({
        value: initialValue,
        error: false,
        errorMsg: "",
        validate,
        setError: (newError, newErrorMsg) => {
            // Update state with error information
            setData((oldData) => {
                return Object.assign(Object.assign({}, oldData), { error: newError, errorMsg: newErrorMsg ? newErrorMsg : "" });
            });
        },
    });
    /**
     * Update the current value
     * @param newValue New value to update
     */
    const updateValue = (newValue) => {
        setData((oldData) => {
            return Object.assign(Object.assign({}, oldData), { value: newValue, error: false, errorMsg: "" });
        });
    };
    return [data, updateValue];
};
exports.useInput = useInput;
//# sourceMappingURL=useInput.js.map