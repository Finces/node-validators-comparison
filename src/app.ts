import 'reflect-metadata';
import { Small } from "./payloads/Small";
import { Medium } from "./payloads/Medium";
import { generateValidSmall } from "./payloads/generators/valid/generateValidSmall";
import { generateValidMedium } from "./payloads/generators/valid/generateValidMedium";
import { generateInvalidSmall } from "./payloads/generators/invalid/generateInvalidSmall";
import { generateInvalidMedium } from "./payloads/generators/invalid/generateInvalidMedium";
import { Measurements } from "./validation/Measurements";
import { ValidateSmalls } from "./validation/ValidateSmalls";
import { ValidateMediums } from "./validation/ValidateMediums";

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

const validateSmalls = new ValidateSmalls();
const validateMediums = new ValidateMediums();

const validSmallsValidation = validateSmalls.validate(validSmalls);
const validMediumsValidation = validateMediums.validate(validMediums);
const invalidSmallsValidation = validateSmalls.validate(invalidSmalls);
const invalidMediumsValidation = validateMediums.validate(invalidMediums);

displayResults(validSmallsValidation, 'VALID SMALLS');
displayResults(validMediumsValidation, 'VALID MEDIUMS');
displayResults(invalidSmallsValidation, 'INVALID SMALLS');
displayResults(invalidMediumsValidation, 'INVALID MEDIUMS');

function displayResults(results: Measurements, type: string) {
    console.log('-------------------------\n');
    console.log(`Results for [${ type }]:\n`);
    console.log(results);
    console.log('\n')
}
