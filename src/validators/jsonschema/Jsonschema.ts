import { Small } from "../../payloads/Small";
import { Medium } from "../../payloads/Medium";
import { Large } from "../../payloads/Large";
import { Validator, ValidatorResult } from 'jsonschema';
import { smallRules } from "./rules/smallRules";
import { mediumRules } from "./rules/mediumRules";
import { largeRules } from "./rules/largeRules";

export class Jsonschema {
    private readonly validator: Validator;

    constructor() {
        this.validator = new Validator();
    }

    small(data: Small): ValidatorResult {
        return this.validator.validate(data, smallRules);
    }

    medium(data: Medium): ValidatorResult {
        return this.validator.validate(data, mediumRules);
    }

    large(data: Large): ValidatorResult {
        return this.validator.validate(data, largeRules);
    }
}