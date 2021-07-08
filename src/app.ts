import 'reflect-metadata';
import { Small } from "./payloads/Small";
import { Medium } from "./payloads/Medium";
import { generateValidSmall } from "./payloads/generators/valid/generateValidSmall";
import { generateValidMedium } from "./payloads/generators/valid/generateValidMedium";
import { generateInvalidSmall } from "./payloads/generators/invalid/generateInvalidSmall";
import { generateInvalidMedium } from "./payloads/generators/invalid/generateInvalidMedium";
import { measure } from "./measure";
import { Validatorjs } from "./validators/validatorjs/Validatorjs";
import { Classvalidator } from "./validators/class-validator/Classvalidator";
import { Joi } from "./validators/joi/Joi";
import { Valivar } from "./validators/valivar/Valivar";
import { Jsonschema } from "./validators/jsonschema/Jsonschema";
import { Ajv } from "./validators/ajv/Ajv";

const validSmalls: Small[] = [];
const validMediums: Medium[] = [];

const invalidSmalls: Small[] = [];
const invalidMediums: Medium[] = [];

for ( let iterator = 0; iterator < 1000; iterator++ ) {
    validSmalls.push(generateValidSmall());
    validMediums.push(generateValidMedium());

    invalidSmalls.push(generateInvalidSmall());
    invalidMediums.push(generateInvalidMedium());
}

const validatorjs = new Validatorjs();
const classvalidator = new Classvalidator();
const joi = new Joi();
const valivar = new Valivar();
const jsonschema = new Jsonschema();
const ajv = new Ajv();

// Validate valid smalls
const validSmallsValidation = {
    validatorjs: measure(() => validSmalls.forEach(validSmall => validatorjs.small(validSmall))),
    classvalidator: measure(() => validSmalls.forEach(validSmall => classvalidator.small(validSmall))),
    joi: measure(() => validSmalls.forEach(validSmall => joi.small(validSmall))),
    valivar: measure(() => validSmalls.forEach(validSmall => valivar.small(validSmall))),
    jsonschema: measure(() => validSmalls.forEach(validSmall => jsonschema.small(validSmall))),
    ajv: measure(() => validSmalls.forEach(validSmall => ajv.small(validSmall))),
};

// Validate valid mediums
const validMediumsValidation = {
    validatorjs: measure(() => validMediums.forEach(validMedium => validatorjs.medium(validMedium))),
    classvalidator: measure(() => validMediums.forEach(validMedium => classvalidator.medium(validMedium))),
    joi: measure(() => validMediums.forEach(validMedium => joi.medium(validMedium))),
    valivar: measure(() => validMediums.forEach(validMedium => valivar.medium(validMedium))),
    jsonschema: measure(() => validMediums.forEach(validMedium => jsonschema.medium(validMedium))),
    ajv: measure(() => validMediums.forEach(validMedium => ajv.medium(validMedium))),
};

// Validate invalid smalls
const invalidSmallsValidation = {
    validatorjs: measure(() => invalidSmalls.forEach(invalidSmall => validatorjs.small(invalidSmall))),
    classvalidator: measure(() => invalidSmalls.forEach(invalidSmall => classvalidator.small(invalidSmall))),
    joi: measure(() => invalidSmalls.forEach(invalidSmall => joi.small(invalidSmall))),
    valivar: measure(() => invalidSmalls.forEach(invalidSmall => valivar.small(invalidSmall))),
    jsonschema: measure(() => invalidSmalls.forEach(invalidSmall => jsonschema.small(invalidSmall))),
    ajv: measure(() => invalidSmalls.forEach(invalidSmall => ajv.small(invalidSmall))),
};

// Validate invalid mediums
const invalidMediumsValidation = {
    validatorjs: measure(() => invalidMediums.forEach(invalidMedium => validatorjs.medium(invalidMedium))),
    classvalidator: measure(() => invalidMediums.forEach(invalidMedium => classvalidator.medium(invalidMedium))),
    joi: measure(() => invalidMediums.forEach(invalidMedium => joi.medium(invalidMedium))),
    valivar: measure(() => invalidMediums.forEach(invalidMedium => valivar.medium(invalidMedium))),
    jsonschema: measure(() => invalidMediums.forEach(invalidMedium => jsonschema.medium(invalidMedium))),
    ajv: measure(() => invalidMediums.forEach(invalidMedium => ajv.medium(invalidMedium))),
};

// Summary
displayResults(validSmallsValidation, 'VALID SMALLS');
displayResults(validMediumsValidation, 'VALID MEDIUMS');
displayResults(invalidSmallsValidation, 'INVALID SMALLS');
displayResults(invalidMediumsValidation, 'INVALID MEDIUMS');

function displayResults(results: object, type: string) {
    console.log('-------------------------\n');
    console.log(`Results for [${ type }]:\n`);
    console.log(results);
    console.log('\n')
}
