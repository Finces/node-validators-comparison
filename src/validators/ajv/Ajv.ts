import { Small } from "../../payloads/Small";
import { default as Validator } from 'ajv';
import addFormats from 'ajv-formats';
import { smallRules } from "./rules/smallRules";
import { Large } from "../../payloads/Large";
import { largeRules } from "./rules/largeRules";

export class Ajv {
    private readonly validator: Validator;

    constructor() {
        this.validator = new Validator({ $data: true, allErrors: true });
        addFormats(this.validator);
    }

    small(data: Small): boolean {
        return this.validator.validate(smallRules, data);
    }

    large(data: Large): boolean {
        return this.validator.validate(largeRules, data);
    }
}