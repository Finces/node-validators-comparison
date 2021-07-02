import { Small } from "../../Small";
import * as faker from "faker";

export function generateValidSmall(): Small {
    const password = faker.internet.password();

    return {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        height: faker.datatype.number({ min: 175, max: 200, precision: 1 }),
        weight: faker.datatype.number({ min: 65, max: 120, precision: 1 }),
        birth_date: faker.date.past(30),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumber('#########'),
        password: password,
        repeated_password: password,
    };
}