import 'reflect-metadata';
import { Small } from "./payloads/Small";
import { Large } from "./payloads/Large";
import { generateValidSmall } from "./payloads/generators/valid/generateValidSmall";
import { generateValidLarge } from "./payloads/generators/valid/generateValidLarge";
import { generateInvalidSmall } from "./payloads/generators/invalid/generateInvalidSmall";
import { generateInvalidLarge } from "./payloads/generators/invalid/generateInvalidLarge";
import { Measurements } from "./validation/Measurements";
import { ValidateSmalls } from "./validation/ValidateSmalls";
import { ValidateLarges } from "./validation/ValidateLarges";

const validSmalls: Small[] = [];
const validLarges: Large[] = [];

const invalidSmalls: Small[] = [];
const invalidLarges: Large[] = [];

for ( let iterator = 0; iterator < 1000; iterator++ ) {
    validSmalls.push(generateValidSmall());
    validLarges.push(generateValidLarge());

    invalidSmalls.push(generateInvalidSmall());
    invalidLarges.push(generateInvalidLarge());
}

const validateSmalls = new ValidateSmalls();
const validateLarges = new ValidateLarges();

const validSmallsValidation = validateSmalls.validate(validSmalls);
const validMLargesValidation = validateLarges.validate(validLarges);
const invalidSmallsValidation = validateSmalls.validate(invalidSmalls);
const invalidLargesValidation = validateLarges.validate(invalidLarges);

displayResults(validSmallsValidation, 'VALID SMALLS');
displayResults(validMLargesValidation, 'VALID LARGES');
displayResults(invalidSmallsValidation, 'INVALID SMALLS');
displayResults(invalidLargesValidation, 'INVALID LARGES');

function displayResults(results: Measurements, type: string) {
    console.log('-------------------------\n');
    console.log(`Results for [${ type }]:\n`);
    console.log(results);
    console.log('\n')
}
