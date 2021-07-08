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
    constructor(
        private readonly validatorjs: Validatorjs = new Validatorjs(),
        private readonly classvalidator: Classvalidator = new Classvalidator(),
        private readonly joi: Joi = new Joi(),
        private readonly valivar: Valivar = new Valivar(),
        private readonly jsonschema: Jsonschema = new Jsonschema(),
        private readonly ajv: Ajv = new Ajv(),
    ) {}

    validate(mediums: Medium[]): Measurements {
        return {
            validatorjs: measure(() => mediums.forEach(validMedium => this.validatorjs.medium(validMedium))),
            classvalidator: measure(() => mediums.forEach(validMedium => this.classvalidator.medium(validMedium))),
            joi: measure(() => mediums.forEach(validMedium => this.joi.medium(validMedium))),
            valivar: measure(() => mediums.forEach(validMedium => this.valivar.medium(validMedium))),
            jsonschema: measure(() => mediums.forEach(validMedium => this.jsonschema.medium(validMedium))),
            ajv: measure(() => mediums.forEach(validMedium => this.ajv.medium(validMedium))),
        };
    }
}