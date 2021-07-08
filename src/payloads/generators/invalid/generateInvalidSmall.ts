import { Small } from "../../Small";
import * as faker from "faker";

export function generateInvalidSmall(): Small {
    return {
        id: faker.phone.phoneNumber(),
        name: faker.datatype.string(64),
        surname: faker.datatype.string(128),
        height: faker.datatype.number({ min: 210, max: 230, precision: 1 }),
        weight: faker.datatype.number({ min: 35, max: 50, precision: 1 }),
        birth_date: faker.date.past(30),
        email: faker.internet.ip(),
        phone_number: faker.phone.phoneNumber('##########'),
        password: faker.datatype.string(5),
        repeated_password: faker.datatype.string(5),
    };
}