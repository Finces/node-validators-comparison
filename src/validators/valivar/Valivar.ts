import { Small } from "../../payloads/Small";
import { Medium } from "../../payloads/Medium";
import { Large } from "../../payloads/Large";
import { smallRules } from "./rules/smallRules";

export class Valivar {
    small(data: Small) {
        return smallRules.validate(data);
    }

    medium(data: Medium) {

    }

    large(data: Large) {

    }
}