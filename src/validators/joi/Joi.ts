import { Small } from "../../payloads/Small";
import { Large } from "../../payloads/Large";
import { smallRules } from "./rules/smallRules";
import { ValidationResult } from "joi";
import { largeRules } from "./rules/largeRules";

export class Joi {
    small(data: Small): ValidationResult {
        return smallRules.validate(data);
    }

    large(data: Large): ValidationResult {
        return largeRules.validate(data);
    }
}