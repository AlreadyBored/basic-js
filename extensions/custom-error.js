const CustomError = class CustomError extends Error {
    constructor(message) {
        super(message);
        this._validationProp = 'NA';
    }
};

module.exports = CustomError;