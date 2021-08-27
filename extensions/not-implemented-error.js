import { CONSTANTS } from './constants.js';

const { SPECIAL_PROP_VALUE } = CONSTANTS;

export class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this._specialProp = SPECIAL_PROP_VALUE;
    }
};