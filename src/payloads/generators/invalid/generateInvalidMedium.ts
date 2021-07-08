import { Medium } from "../../Medium";
import * as faker from "faker";

export function generateInvalidMedium(): Medium {
    return {
        id: faker.datatype.string(12),
        client: {
            id: faker.datatype.string(12),
            first_name: faker.datatype.string(64),
            last_name: faker.datatype.string(128),
            contact: {
                phone_number: faker.phone.phoneNumber('##########'),
                email: faker.datatype.string(12),
            },
        },
        driver: {
            id: faker.datatype.string(12),
            first_name: faker.datatype.string(64),
            last_name: faker.datatype.string(128),
            contact: {
                phone_number: faker.phone.phoneNumber('##########'),
                email: faker.datatype.string(12),
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