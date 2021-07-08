import { Small } from "../../payloads/Small";
import { Medium } from "../../payloads/Medium";
import { smallRules } from "./rules/smallRules";
import { ValidationResult } from "joi";
import { mediumRules } from "./rules/mediumRules";

export class Joi {
    small(data: Small): ValidationResult {
        return smallRules.validate(data);
    }

    medium(data: Medium): ValidationResult {
        return mediumRules.validate(data);
    }
}