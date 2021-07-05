import { Medium } from "../../Medium";
import * as faker from "faker";

export function generateValidMedium(): Medium {
    return {
        id: faker.datatype.uuid(),
        client: {
            id: faker.datatype.uuid(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            contact: {
                phone_number: faker.phone.phoneNumber('#########'),
                email: null,
            },
        },
        driver: {
            id: faker.datatype.uuid(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            contact: {
                phone_number: null,
                email: faker.internet.email(),
            },
        },
        order_details: {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: Number(faker.commerce.price(30, 100, 2)),
            currency: 'PLN',
            delivery_address: {
                country: 'Poland',
                city: 'Rzeszów',
                postal_code: faker.address.zipCode('##-###'),
                street: faker.address.streetName(),
                building: faker.datatype.number({ min: 1, max: 256, precision: 1 }).toString(),
            },
        },
        restaurant: {
            id: faker.datatype.uuid(),
            name: faker.company.companyName(),
            menu: [
                {
                    id: faker.datatype.number({ min: 1, max: 10, precision: 1 }),
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    prices: [
                        {
                            amount: Number(faker.commerce.price(10, 20, 2)),
                            currency: 'PLN'
                        }
                    ],
                },
                {
                    id: faker.datatype.number({ min: 11, max: 15, precision: 1 }),
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    prices: [
                        {
                            amount: Number(faker.commerce.price(10, 20, 2)),
                            currency: 'PLN'
                        },
                        {
                            amount: Number(faker.commerce.price(4, 8, 2)),
                            currency: 'EUR'
                        },
                    ],
                },
                {
                    id: faker.datatype.number({ min: 16, max: 20, precision: 1 }),
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    prices: [
                        {
                            amount: Number(faker.commerce.price(10, 20, 2)),
                            currency: 'PLN'
                        },
                        {
                            amount: Number(faker.commerce.price(4, 8, 2)),
                            currency: 'EUR'
                        },
                        {
                            amount: Number(faker.commerce.price(5, 9, 2)),
                            currency: 'DOL',
                        },
                    ],
                },
            ],
            address: {
                country: 'Poland',
                city: 'Rzeszów',
                postal_code: faker.address.zipCode('##-###'),
                street: faker.address.streetName(),
                building: faker.datatype.number({ min: 1, max: 256, precision: 1 }).toString(),
            },
        },
    };
}