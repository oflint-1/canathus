"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (fields) => {
    let valid = true;
    for (let key in fields) {
        const data = fields[key];
        if (!data.validate(data.value)) {
            valid = false;
            data.setError(true);
        }
    }
    return valid;
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map