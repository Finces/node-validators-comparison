import { Small } from "./payloads/Small";
import { Medium } from "./payloads/Medium";
import { Large } from "./payloads/Large";
import { generateValidSmall } from "./payloads/generators/valid/generateValidSmall";
import { generateValidMedium } from "./payloads/generators/valid/generateValidMedium";
import { generateValidLarge } from "./payloads/generators/valid/generateValidLarge";
import { generateInvalidSmall } from "./payloads/generators/invalid/generateInvalidSmall";
import { generateInvalidMedium } from "./payloads/generators/invalid/generateInvalidMedium";
import { generateInvalidLarge } from "./payloads/generators/invalid/generateInvalidLarge";
import { measure } from "./measure";
import { Validatorjs } from "./validators/validatorjs/Validatorjs";
import { Classvalidator } from "./validators/class-validator/Classvalidator";
import { Joi } from "./validators/joi/Joi";
import { Valivar } from "./validators/valivar/Valivar";
import { Jsonschema } from "./validators/jsonschema/Jsonschema";
import { Ajv } from "./validators/ajv/Ajv";

const validSmalls: Small[] = [];
const validMediums: Medium[] = [];
const validLarges: Large[] = [];

const invalidSmalls: Small[] = [];
const invalidMediums: Medium[] = [];
const invalidLarges: Large[] = [];

for ( let iterator = 0; iterator < 1000; iterator++ ) {
    validSmalls.push(generateValidSmall());
    validMediums.push(generateValidMedium());
    validLarges.push(generateValidLarge());

    invalidSmalls.push(generateInvalidSmall());
    invalidMediums.push(generateInvalidMedium());
    invalidLarges.push(generateInvalidLarge());
}

const validatorjs = new Validatorjs();
const classvalidator = new Classvalidator();
const joi = new Joi();
const valivar = new Valivar();
const jsonschema = new Jsonschema();
const ajv = new Ajv();

// const isValidationCorrect = {
//     validatorjs: validatorjs.small(validSmalls[0]).errors.all(),
//     classvalidator: classvalidator.small(validSmalls[0]),
//     joi: joi.small(validSmalls[0]).error,
//     valivar: valivar.small(validSmalls[0]),
//     jsonschema: jsonschema.small(validSmalls[0]).errors,
//     ajv: ajv.small(validSmalls[0]),
// };
// console.log(isValidationCorrect);

// Validate valid smallRules
const validSmallsValidation = {
    validatorjs: measure(() => validSmalls.forEach(validSmall => validatorjs.small(validSmall))),
    classvalidator: measure(() => validSmalls.forEach(validSmall => classvalidator.small(validSmall))),
    joi: measure(() => validSmalls.forEach(validSmall => joi.small(validSmall))),
    valivar: measure(() => validSmalls.forEach(validSmall => valivar.small(validSmall))),
    jsonschema: measure(() => validSmalls.forEach(validSmall => jsonschema.small(validSmall))),
    ajv: measure(() => validSmalls.forEach(validSmall => ajv.small(validSmall))),
};

// Validate valid mediums
const validMediumsValidation = {};

// Validate valid larges
const validLargesValidation = {};

// Validate invalid smalls
const invalidSmallsValidation = {};

// Validate invalid mediums
const invalidMediumsValidation = {};

// Validate invalid larges
const invalidLargesValidation = {};

// Summary
console.log(validSmallsValidation);

//TODO: Check if validates date correctly
//TODO: Check if validated repeated_password correctly
