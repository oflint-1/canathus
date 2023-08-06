"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
/**
 * Validates a set of inputs.
 * @param fields object containing inputs to validate
 * @returns true if all input values are valid
 */
const validate = (fields) => {
    let allValid = true;
    // Get each key
    for (let key in fields) {
        // Validate the data
        const data = fields[key];
        const { valid, errorMsg } = data.validator(data.value);
        // Set all valid
        if (!valid)
            allValid = false;
        // Update error
        data.setError(!valid, errorMsg);
    }
    return allValid;
};
exports.validate = validate;
