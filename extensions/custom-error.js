const { SPECIAL_PROP_VALUE } = require('./constants');

const NotImplementedError = class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this._specialProp = SPECIAL_PROP_VALUE;
    }
};

module.exports = NotImplementedError;