import { Small } from "../../payloads/Small";
import { default as Validator } from 'ajv';
import addFormats from 'ajv-formats';
import { smallRules } from "./rules/smallRules";
import { Medium } from "../../payloads/Medium";
import { mediumRules } from "./rules/mediumRules";
import { Large } from "../../payloads/Large";
import { largeRules } from "./rules/largeRules";

export class Ajv {
    private readonly validator: Validator;

    constructor() {
        this.validator = new Validator({ $data: true });
        addFormats(this.validator);
    }

    small(data: Small): boolean {
        return this.validator.validate(smallRules, data);
    }

    medium(data: Medium): boolean {
        return this.validator.validate(mediumRules, data);
    }

    large(data: Large): boolean {
        return this.validator.validate(largeRules, data);
    }
}