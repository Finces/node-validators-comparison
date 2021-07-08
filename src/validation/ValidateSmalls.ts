import { Small } from "../payloads/Small";
import { Measurements } from "./Measurements";
import { Validatorjs } from "../validators/validatorjs/Validatorjs";
import { Classvalidator } from "../validators/class-validator/Classvalidator";
import { Joi } from "../validators/joi/Joi";
import { Valivar } from "../validators/valivar/Valivar";
import { Jsonschema } from "../validators/jsonschema/Jsonschema";
import { Ajv } from "../validators/ajv/Ajv";
import { measure } from "../measure";

export class ValidateSmalls {
    validate(smalls: Small[]): Measurements {
        const validatorjs = new Validatorjs();
        const classvalidator = new Classvalidator();
        const joi = new Joi();
        const valivar = new Valivar();
        const jsonschema = new Jsonschema();
        const ajv = new Ajv();

        return {
            validatorjs: measure(() => smalls.forEach(validSmall => validatorjs.small(validSmall))),
            classvalidator: measure(() => smalls.forEach(validSmall => classvalidator.small(validSmall))),
            joi: measure(() => smalls.forEach(validSmall => joi.small(validSmall))),
            valivar: measure(() => smalls.forEach(validSmall => valivar.small(validSmall))),
            jsonschema: measure(() => smalls.forEach(validSmall => jsonschema.small(validSmall))),
            ajv: measure(() => smalls.forEach(validSmall => ajv.small(validSmall))),
        };
    }
}