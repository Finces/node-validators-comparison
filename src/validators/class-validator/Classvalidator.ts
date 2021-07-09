import { Small } from "../../payloads/Small";
import { Large } from "../../payloads/Large";
import { SmallRules } from "./rules/SmallRules";
import { LargeRules } from "./rules/LargeRules";
import { validateSync, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class Classvalidator {
    small(data: Small): ValidationError[] {
        const mappedData = plainToClass(SmallRules, data);

        return validateSync(mappedData);
    }

    large(data: Large): ValidationError[] {
        const mappedData = plainToClass(LargeRules, data);

        return validateSync(mappedData);
    }
}