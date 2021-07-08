import { Small } from "../../payloads/Small";
import { default as Validator, ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { smallRules } from "./rules/smallRules";
import { Medium } from "../../payloads/Medium";
import { mediumRules } from "./rules/mediumRules";

export class Ajv {
    private readonly validator: Validator;

    constructor() {
        this.validator = new Validator({ $data: true, allErrors: true });
        addFormats(this.validator);
    }

    small(data: Small): boolean {
        return this.validator.validate(smallRules, data);
    }

    medium(data: Medium): boolean {
        return this.validator.validate(mediumRules, data);
    }

    getErrors(): ErrorObject[] | null {
        return this.validator.errors;
    }
}