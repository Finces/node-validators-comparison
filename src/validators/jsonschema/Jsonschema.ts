import { Small } from "../../payloads/Small";
import { Large } from "../../payloads/Large";
import { Validator, ValidatorResult } from 'jsonschema';
import { smallRules } from "./rules/smallRules";
import { largeRules } from "./rules/largeRules";

export class Jsonschema {
    private readonly validator: Validator;

    constructor() {
        this.validator = new Validator();
    }

    small(data: Small): ValidatorResult {
        return this.validator.validate(data, smallRules);
    }

    large(data: Large): ValidatorResult {
        return this.validator.validate(data, largeRules);
    }
}