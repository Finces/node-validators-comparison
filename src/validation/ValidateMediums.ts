import { Medium } from "../payloads/Medium";
import { Measurements } from "./Measurements";
import { Validatorjs } from "../validators/validatorjs/Validatorjs";
import { Classvalidator } from "../validators/class-validator/Classvalidator";
import { Joi } from "../validators/joi/Joi";
import { Valivar } from "../validators/valivar/Valivar";
import { Jsonschema } from "../validators/jsonschema/Jsonschema";
import { Ajv } from "../validators/ajv/Ajv";
import { measure } from "../measure";

export class ValidateMediums {
    validate(mediums: Medium[]): Measurements {
        const validatorjs = new Validatorjs();
        const classvalidator = new Classvalidator();
        const joi = new Joi();
        const valivar = new Valivar();
        const jsonschema = new Jsonschema();
        const ajv = new Ajv();

        return {
            validatorjs: measure(() => mediums.forEach(validMedium => validatorjs.medium(validMedium))),
            classvalidator: measure(() => mediums.forEach(validMedium => classvalidator.medium(validMedium))),
            joi: measure(() => mediums.forEach(validMedium => joi.medium(validMedium))),
            valivar: measure(() => mediums.forEach(validMedium => valivar.medium(validMedium))),
            jsonschema: measure(() => mediums.forEach(validMedium => jsonschema.medium(validMedium))),
            ajv: measure(() => mediums.forEach(validMedium => ajv.medium(validMedium))),
        };
    }
}