"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (fields) => {
    let allValid = true;
    for (let key in fields) {
        const data = fields[key];
        const { valid, errorMsg } = data.validate(data.value);
        if (!valid) {
            allValid = false;
            data.setError(true, errorMsg);
        }
        else {
            data.setError(false, errorMsg);
        }
    }
    return allValid;
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map