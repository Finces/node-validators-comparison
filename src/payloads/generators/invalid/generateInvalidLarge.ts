import { Large } from "../../Large";
import * as faker from "faker";

export function generateInvalidLarge(): Large {
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
            name: faker.datatype.string(2),
            description: faker.datatype.string(5),
            price: Number(faker.commerce.price(30, 100, 2)),
            currency: 'PLN',
            delivery_address: {
                country: faker.address.country(),
                city: faker.address.city(),
                postal_code: faker.address.zipCode('###-###'),
                street: faker.address.streetName(),
                building: faker.datatype.number({ min: 1, max: 256, precision: 1 }).toString(),
            },
        },
        restaurant: {
            id: faker.datatype.string(8),
            name: faker.datatype.string(2),
            menu: [
                {
                    id: faker.datatype.number({ min: 1, max: 10, precision: 1 }),
                    name: faker.datatype.string(2),
                    description: faker.datatype.string(5),
                    prices: [
                        {
                            amount: Number(faker.commerce.price(10, 20, 2)),
                            currency: faker.finance.currencyName()
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
                            amount: 0,
                            currency: 'PLN'
                        },
                        {
                            amount: Number(faker.commerce.price(4, 8, 2)),
                            currency: 'EUR'
                        },
                        {
                            amount: Number(faker.commerce.price(5, 9, 2)),
                            currency: faker.finance.currencySymbol(),
                        },
                    ],
                },
            ],
            address: {
                country: faker.address.country(),
                city: faker.address.city(),
                postal_code: faker.address.zipCode('###-###'),
                street: faker.address.streetName(),
                building: faker.datatype.number({ min: 1, max: 256, precision: 1 }).toString(),
            },
        },
    };
}