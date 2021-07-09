import { Large } from "../payloads/Large";
import { Measurements } from "./Measurements";
import { Validatorjs } from "../validators/validatorjs/Validatorjs";
import { Classvalidator } from "../validators/class-validator/Classvalidator";
import { Joi } from "../validators/joi/Joi";
import { Valivar } from "../validators/valivar/Valivar";
import { Jsonschema } from "../validators/jsonschema/Jsonschema";
import { Ajv } from "../validators/ajv/Ajv";
import { measure } from "../measure";

export class ValidateLarges {
    constructor(
        private readonly validatorjs: Validatorjs = new Validatorjs(),
        private readonly classvalidator: Classvalidator = new Classvalidator(),
        private readonly joi: Joi = new Joi(),
        private readonly valivar: Valivar = new Valivar(),
        private readonly jsonschema: Jsonschema = new Jsonschema(),
        private readonly ajv: Ajv = new Ajv(),
    ) {}

    validate(larges: Large[]): Measurements {
        return {
            validatorjs: measure(() => larges.forEach(validLarge => this.validatorjs.large(validLarge))),
            classvalidator: measure(() => larges.forEach(validLarge => this.classvalidator.large(validLarge))),
            joi: measure(() => larges.forEach(validLarge => this.joi.large(validLarge))),
            valivar: measure(() => larges.forEach(validLarge => this.valivar.large(validLarge))),
            jsonschema: measure(() => larges.forEach(validLarge => this.jsonschema.large(validLarge))),
            ajv: measure(() => larges.forEach(validLarge => this.ajv.large(validLarge))),
        };
    }
}