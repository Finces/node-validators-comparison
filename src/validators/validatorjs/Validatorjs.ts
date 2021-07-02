import { Small } from "../../payloads/Small";
import * as Validator from "validatorjs";
import { smallRules } from "./rules/smallRules";
import { Medium } from "../../payloads/Medium";
import { mediumRules } from "./rules/mediumRules";
import { Large } from "../../payloads/Large";
import { largeRules } from "./rules/largeRules";

export class Validatorjs {
    small(data: Small): Validator.Validator<Small> {
        const validator = new Validator<Small>(data, smallRules);

        validator.check();

        return validator;
    }

    medium(data: Medium): Validator.Validator<Medium> {
        const validator = new Validator<Medium>(data, mediumRules);

        validator.check();

        return validator;
    }

    large(data: Large): Validator.Validator<Large> {
        const validator = new Validator<Large>(data, largeRules);

        validator.check();

        return validator;
    }
}