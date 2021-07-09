import { Small } from "../../payloads/Small";
import { Large } from "../../payloads/Large";
import { smallRules } from "./rules/smallRules";
import { largeRules } from "./rules/largeRules";

export class Valivar {
    small(data: Small) {
        return smallRules.validate(data);
    }

    large(data: Large) {
        return largeRules.validate(data);
    }
}