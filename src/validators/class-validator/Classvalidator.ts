import { Small } from "../../payloads/Small";
import { Medium } from "../../payloads/Medium";
import { SmallRules } from "./rules/SmallRules";
import { MediumRules } from "./rules/MediumRules";
import { validateSync, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class Classvalidator {
    small(data: Small): ValidationError[] {
        const mappedData = plainToClass(SmallRules, data);

        return validateSync(mappedData);
    }

    medium(data: Medium): ValidationError[] {
        const mappedData = plainToClass(MediumRules, data);

        return validateSync(mappedData);
    }
}