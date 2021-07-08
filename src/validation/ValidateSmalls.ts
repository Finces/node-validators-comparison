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
    constructor(
        private readonly validatorjs: Validatorjs = new Validatorjs(),
        private readonly classvalidator: Classvalidator = new Classvalidator(),
        private readonly joi: Joi = new Joi(),
        private readonly valivar: Valivar = new Valivar(),
        private readonly jsonschema: Jsonschema = new Jsonschema(),
        private readonly ajv: Ajv = new Ajv(),
    ) {}

    validate(smalls: Small[]): Measurements {
        return {
            validatorjs: measure(() => smalls.forEach(validSmall => this.validatorjs.small(validSmall))),
            classvalidator: measure(() => smalls.forEach(validSmall => this.classvalidator.small(validSmall))),
            joi: measure(() => smalls.forEach(validSmall => this.joi.small(validSmall))),
            valivar: measure(() => smalls.forEach(validSmall => this.valivar.small(validSmall))),
            jsonschema: measure(() => smalls.forEach(validSmall => this.jsonschema.small(validSmall))),
            ajv: measure(() => smalls.forEach(validSmall => this.ajv.small(validSmall))),
        };
    }
}